import { IPerson } from '@/@types/person'
import { Repository } from '../core/Repository'

class PersonRepository extends Repository<IPerson> {}

export default new PersonRepository('/users')
