export interface IObserver {
  notifyAddTodo(message: string): void
  notifyRemoveTodo(): void
}

export class Subject {
  private observerCollection: IObserver[]

  constructor() {
    this.observerCollection = []
  }

  registration(observer: IObserver) {
    this.observerCollection.push(observer)
  }

  notifyAddTodo(message: string) {
    this.observerCollection.forEach((observer) => {
      observer.notifyAddTodo(message)
    })
  }

  notifyRemoveTodo() {
    this.observerCollection.forEach((observer) => {
      observer.notifyRemoveTodo()
    })
  }
}