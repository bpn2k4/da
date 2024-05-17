const response = await fetch(
  'http://localhost:4000/api/v1/chat',
  {
    method: 'POST',
    headers: {
      'Content-Type': 'text/event-stream',
    },
  }
)
if (response.body != null) {
  const reader = response.body
    .pipeThrough(new TextDecoderStream())
    .getReader()
  while (true) {
    const { value, done } = await reader.read()
    if (done) break
    // console.log('Received: ', value)
    try {
      console.log(JSON.parse(value))
    } catch (error) {
      console.log(error);
    }
    setValue((prev: string) => prev + value)
  }
}