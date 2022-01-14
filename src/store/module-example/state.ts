export interface ExampleStateInterface {
  app: string;
}

function state (): ExampleStateInterface {
  return {
    app: 'Pegasus'
  }
}

export default state
