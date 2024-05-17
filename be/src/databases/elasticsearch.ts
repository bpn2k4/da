import { Client } from '@elastic/elasticsearch'

import { ENVIRONMENT } from '@configs'

const elasticsearch = new Client({
  node: ENVIRONMENT.ELASTIC_SEARCH_URL
})

export default elasticsearch