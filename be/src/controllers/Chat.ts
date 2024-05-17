import type { NextFunction, Request, Response } from 'express'
import { MESSAGE_ROLE, STATUS_CODE, STATUS_NAME } from '@configs'
import { ChatValidator } from '@validations'
import { JoiValidationError, NotFoundError } from '@errors'
import { Message, Conversation } from '@models'

const wait = (ms: number) => new Promise(e => setTimeout(e, ms))

const items = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Officia ad cupidatat proident dolore.Eiusmod pariatur sint excepteur magna culpa et in culpa aute sunt velit exercitation amet tempor.Magna duis excepteur sunt dolore ea.Aute mollit veniam enim pariatur pariatur eu fugiat adipisicing non veniam pariatur.Enim proident in irure sint cupidatat sit consequat.Tempor enim eu duis enim esse labore deserunt eu ea occaecat labore.",
  "Qui sit ullamco do nisi aliqua ea nostrud eu in id.Et incididunt eiusmod deserunt cillum veniam Lorem velit velit sit incididunt.In voluptate Lorem non ad nulla minim.Magna dolor dolore dolor ullamco ut sunt tempor in.Aliqua cupidatat anim cupidatat Lorem nisi irure esse aliquip incididunt aliqua pariatur sint exercitation.Magna sint tempor laboris proident reprehenderit cupidatat Lorem irure fugiat minim sunt nulla qui laborum.Laboris amet aliqua cupidatat velit proident nulla laborum.",
  "Lorem fugiat sunt non laborum ex ea voluptate elit commodo.Ut ipsum cillum quis officia aute duis mollit.Cillum fugiat esse minim reprehenderit non cupidatat voluptate minim.Laborum laboris ea do elit cupidatat.",
  "Eiusmod aliquip id nostrud eu nisi irure fugiat.Proident eiusmod ipsum ullamco culpa.Velit in nisi fugiat ex id minim excepteur.In ex voluptate Lorem minim in anim tempor officia proident sint anim adipisicing nisi.Fugiat et dolor incididunt anim.Sunt consequat amet eu cupidatat Lorem nulla sint sint Lorem Lorem consectetur dolor proident sunt.Officia fugiat sunt cupidatat ut esse irure.",
  "Adipisicing velit cupidatat adipisicing aute est enim.Culpa laborum qui laboris irure ad excepteur laboris reprehenderit commodo laborum.Elit dolor nulla voluptate officia qui do velit consequat officia.",
  "Sit exercitation laborum nostrud sunt in est dolor mollit anim velit est nulla nostrud in.Laborum aliquip nostrud labore sit anim irure aute do eu ut veniam laborum duis ad.Mollit enim aliquip esse sunt qui deserunt nisi sit aliquip elit.",
  "Officia et culpa deserunt ea.Sunt dolor culpa duis do culpa esse.Laborum eu laboris voluptate aliqua eiusmod enim fugiat sint ex et reprehenderit anim sint minim.Excepteur Lorem quis eiusmod cupidatat.Nulla veniam do eiusmod non enim laboris minim velit elit cillum aliquip ex sunt veniam.Laborum qui ut ullamco cillum mollit ut consectetur magna velit reprehenderit id.Cillum esse esse ut esse Lorem non exercitation nulla consequat ipsum nostrud eu aute esse.",
  "Est anim enim voluptate veniam et proident anim quis dolore eiusmod minim do reprehenderit.Elit laborum laborum laboris veniam deserunt eiusmod dolore exercitation elit.Proident nostrud adipisicing ad officia duis nisi in incididunt.Et amet quis proident aliqua laborum ipsum sit sint consectetur aute adipisicing.",
  "Esse voluptate aute laborum proident id ipsum eu proident id reprehenderit.Irure velit proident deserunt quis exercitation officia amet consectetur.Tempor ut anim sit irure ea amet incididunt eiusmod occaecat.Ut aute exercitation aute non officia est id eiusmod do duis.Do mollit Lorem veniam aliqua qui qui et.Cillum et minim proident dolore ipsum dolore ex ea magna exercitation aliquip ad commodo do.Elit cupidatat minim laboris mollit voluptate consectetur officia nostrud non aliqua amet incididunt.",
  "Eiusmod occaecat occaecat proident occaecat id eu ullamco voluptate culpa non amet anim Lorem.Excepteur nulla sit enim ea est eu commodo dolor ex consectetur pariatur.Fugiat Lorem consectetur eu sint ad minim incididunt dolor culpa.Ipsum commodo ea id laboris sunt exercitation exercitation eiusmod.Ad consequat magna irure est.Consectetur ullamco magna reprehenderit excepteur ipsum magna.",
  "Anim amet nisi sint duis.Qui quis ad tempor aute adipisicing sit non mollit labore ad veniam.Nulla exercitation et id id eu.Eiusmod cupidatat reprehenderit tempor qui eu incididunt do dolore ex ullamco reprehenderit excepteur.Quis duis excepteur sint officia velit velit irure pariatur irure sunt ullamco proident in.Et tempor commodo non duis minim nostrud do.",
  "Quis cupidatat do nulla nulla aute.Officia aliquip sit nulla laborum enim ad eiusmod officia magna non ea dolor veniam.Culpa reprehenderit incididunt aute culpa enim exercitation.Quis tempor irure enim consequat exercitation ad.",
  "Sit adipisicing enim veniam anim.Voluptate aliqua magna ad quis incididunt.Consectetur aute duis laboris consectetur et mollit ullamco ea incididunt deserunt esse amet minim.Id et excepteur officia ullamco elit dolore dolore excepteur elit reprehenderit quis consectetur aliqua.Aliquip amet laborum mollit fugiat ut sint mollit.Aliqua voluptate esse tempor nisi amet minim et ut nostrud sunt.Veniam laboris cillum reprehenderit mollit officia tempor.",
  "Pariatur qui reprehenderit aliqua in reprehenderit aute exercitation ipsum consectetur quis sint.Sunt enim velit minim ex elit quis deserunt qui laboris nostrud officia in pariatur aliquip.Nostrud incididunt culpa aliqua ipsum pariatur occaecat.Laboris cupidatat culpa anim ut enim.",
  "Id incididunt sit ad adipisicing.Enim eiusmod minim commodo deserunt fugiat deserunt magna reprehenderit consequat ut.Ipsum ullamco adipisicing Lorem commodo sint incididunt.Id proident laborum eu ut nisi consequat.Laborum aliquip sunt id elit aute tempor non officia consectetur aute cupidatat labore.Enim amet labore laboris eiusmod dolor reprehenderit fugiat commodo ex veniam.Consectetur ullamco exercitation enim exercitation proident ea cupidatat occaecat ex.",
  "Sunt commodo adipisicing culpa sint in amet eiusmod deserunt non.Cupidatat aute id sunt minim excepteur deserunt amet enim proident.Sit qui Lorem laborum elit.Laboris dolor officia enim quis.",
  "Cillum aute commodo eiusmod est sint aliquip amet duis sunt pariatur.Dolore nostrud esse ullamco dolor eu reprehenderit quis cupidatat aliqua aliqua.Elit adipisicing eiusmod non ullamco aute elit anim reprehenderit do consectetur.Velit sit ullamco et duis aliqua eiusmod voluptate velit.Sunt culpa aliqua est velit elit veniam do dolor pariatur laboris Lorem ea aliquip.Eiusmod exercitation mollit nostrud commodo tempor proident ipsum commodo ipsum veniam dolor in proident culpa.",
  "Sint sint velit sit in sunt.Aliqua dolore esse commodo reprehenderit ex sunt mollit do sit culpa ex laboris Lorem.Occaecat Lorem sunt enim laboris magna cillum.",
  "Laboris officia duis aliqua eiusmod.Nostrud irure minim mollit duis.Sit minim sunt nulla dolor.Ad eu nostrud cupidatat laboris enim est aliquip deserunt sunt do fugiat ea.Aute ad et quis voluptate sit sint.Dolore ad veniam velit labore consequat nisi do elit elit tempor ullamco voluptate proident consequat.",
  "Duis sit laborum officia eu est minim.Consequat ut ad est qui nostrud.Ea esse voluptate aute cupidatat.Ut deserunt id mollit ut eu ea minim.Culpa aliquip dolore anim voluptate culpa ut voluptate.Voluptate laboris est labore aliqua sunt qui duis nisi duis ut nisi laborum ullamco.Consectetur magna officia non non.",
]

const createChat = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body, error } = ChatValidator.validateCreateChat({ body: req.body })
    if (error) {
      throw new JoiValidationError(error)
    }
    const conversation = await Conversation.findOne({
      where: { conversationId: body.conversationId }
    })
    if (!conversation) {
      throw new NotFoundError(`${body.conversationId}`)
    }
    const userMessage = await (await Message.create({
      conversationId: body.conversationId,
      role: MESSAGE_ROLE.USER,
      text: body.message
    })).toJSON()
    let botMessage = ""
    const text = items[Math.floor(Math.random() * items.length)].split(" ")
    for await (const token of text) {
      res.write(token + " ")
      botMessage = botMessage + token + " "
      await wait(100)
    }
    const systemMessage = await (await Message.create({
      conversationId: body.conversationId,
      role: MESSAGE_ROLE.SYSTEM,
      text: botMessage
    })).toJSON()
    return res.status(STATUS_CODE.SUCCESS).json({
      status: STATUS_NAME.SUCCESS,
      userMessage: userMessage,
      systemMessage: systemMessage
    })
  } catch (error) {
    next(error)
  }
}

const ChatController = {
  createChat
}

export default ChatController