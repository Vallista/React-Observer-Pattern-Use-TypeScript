export interface IObserver {
  notify(message: string): void
}

export class Subject {
  private observerCollection: IObserver[]

  constructor() {
    this.observerCollection = []
  }

  registration(observer: IObserver) {
    this.observerCollection.push(observer)
  }

  notify(message: string) {
    this.observerCollection.forEach((observer) => {
      observer.notify(message)
    })
  }
}