import * as S from './styles'
import Input from '../../../components/Form/Input'

const JobsDataEntry = () => {
   return (
      <S.Wrapper>
         <Input
            min={new Date().toISOString().split('T')[0]}
            placeholder='selecione uma data'
            value=""
            onChange={() => 'olá'}
            onBlur={() => 'olá'}
            error='Olá'
            success={false}
         />
      </S.Wrapper>
   )
}

export default JobsDataEntry
