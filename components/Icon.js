import { FaAward, FaCheck, FaMedal, FaStar, FaSwimmer } from 'react-icons/fa'
const Icon = ({ name, className }) => {
  const icons = {
    Award: FaAward,
    Check: FaCheck,
    Medal: FaMedal,
    Star: FaStar,
    Swimmer: FaSwimmer,
  }
  const TitleIcon = icons[name]
  return <TitleIcon className={className} />
}
export default Icon
