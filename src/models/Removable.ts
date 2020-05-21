export enum RemoveState {
  IDLE = 0,
  REMOVE
}

export interface IRemovable {
  getRemoveState(): RemoveState
  remove(): void
}