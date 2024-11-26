import { IResponse } from '@/@types/response'
import { ISynchronization, ISynchStatus } from '@/@types/synchronization'
import { Repository } from '@/core/Repository'

class SynchronizationRepository extends Repository<ISynchronization> {
  async check(id: string): Promise<IResponse<{ check: ISynchStatus }>> {
    return this.execute(() => this.api.get(`${this.path}/${id}/check`))
  }
}

export default new SynchronizationRepository('/synchronizations')
