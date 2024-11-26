'use client'

import { OpenModalProps } from '@/components/Modal/contexts/ModalContext'
import { PersonForm } from '../NewPersonForm'
import { Modal } from '@/components/Modal'

type PersonModalProps = OpenModalProps

export function NewPersonModal({ setOpen, open }: PersonModalProps) {
  return (
    <Modal title="Nova pessoa" open={open} setOpen={setOpen}>
      <PersonForm />
    </Modal>
  )
}
