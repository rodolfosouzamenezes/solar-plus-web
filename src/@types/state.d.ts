export interface CurrentDataState<T> {
  doc?: T
  isLoading?: boolean
}

export interface DataListState<T> {
  docs?: Array<T>
  isLoading?: boolean
}
