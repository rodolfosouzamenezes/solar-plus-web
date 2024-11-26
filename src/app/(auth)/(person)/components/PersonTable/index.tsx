'use client'

import { columns } from './Columns'
import { usePerson } from '../../../../../contexts/PersonContext'
import { useState } from 'react'
import { NewPersonModal } from '../NewPersonModal'
import { DataTable } from '@/components/DataTable'
import { Button } from '@/components/ui/button'

export function PersonTable() {
  const { personList } = usePerson()
  const [openNewPersonModal, setOpenNewPersonModal] = useState(false)

  return (
    <>
      <DataTable
        data={personList}
        columns={columns}
        conditionalRender={false}
        filters={() => {
          return (
            <Button onClick={() => setOpenNewPersonModal(true)}>
              Nova pessoa
            </Button>
          )
        }}
      />
      <NewPersonModal
        open={openNewPersonModal}
        setOpen={setOpenNewPersonModal}
      />
    </>
  )
}
