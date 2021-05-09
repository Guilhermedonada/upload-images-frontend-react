import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

import {DropContainer, UploadMessage, uploadMessage} from './styles'

export default class Upload extends Component {

  renderDragMessage = (isDragActive, isDragReject) => {
    if(!isDragActive){
      return <UploadMessage>Arraste arquivos aqui...</UploadMessage>
    }

    if(isDragReject){
      return <UploadMessage type="error">Arquivo nao suportado</UploadMessage>
    }
    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>
  }

  render() {

    const { onUpload } = this.props


    return (
      <Dropzone accept="image/*" onDropAccepted={onUpload}>
        {({getRootProps, getInputProps, isDragActive, isDragReject}) => (
          <DropContainer
            {...getRootProps()}
            isDragActive={isDragActive} //passando o mouse por cima do campo (segurando imagem)
            isDragReject={isDragReject} //passando o mouse por cima do campo (arquivo nao é do tipo imagem)
          >
            <input {...getInputProps()} />
            {this.renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    )
  }
}