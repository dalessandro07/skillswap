import { memo } from 'react'
import ModalEditUser from './ModalEditUser'

function EditModalsContainer({
  showEditName,
  showEditPhoto,
  showEditPortfolio,
  toggleShowName,
  toggleShowPhoto,
  toggleShowPortfolio
}: {
  showEditName: boolean
  showEditPhoto: boolean
  showEditPortfolio: boolean
  toggleShowName: () => void
  toggleShowPhoto: () => void
  toggleShowPortfolio: () => void
}) {
  return (
    <>
      {showEditName && (
        <ModalEditUser
          toggleShow={toggleShowName}
          label="nombre"
          name="fullName"
          placeholder="Ej. Alessandro Rios"
        />
      )}
      {showEditPhoto && (
        <ModalEditUser
          toggleShow={toggleShowPhoto}
          label="foto de perfil"
          name="avatar_url"
          placeholder="Ej. https://alessandrorios.com/perfil.png"
        />
      )}
      {showEditPortfolio && (
        <ModalEditUser
          toggleShow={toggleShowPortfolio}
          label="portfolio"
          name="portfolio"
          placeholder="Ej. https://alessandrorios.com"
        />
      )}
    </>
  )
}

export default memo(EditModalsContainer)
