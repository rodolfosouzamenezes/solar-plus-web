import { CalcReturnTimeOnInvestmentForm } from './components/CalcReturnTimeOnInvestmentForm'
import { ReturnTimeOnInvestmentTable } from './components/ReturnTimeOnInvestmentTable'

export default function Person() {
  return (
    <>
      <div className="max-h-screen w-full space-y-4">
        <CalcReturnTimeOnInvestmentForm />

        <ReturnTimeOnInvestmentTable />
      </div>
    </>
  )
}
