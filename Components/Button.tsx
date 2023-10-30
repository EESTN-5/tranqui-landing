'use client';
import React from "react";
import styles from "@/app/page.module.scss";
import { IconBrandGooglePlay } from '@tabler/icons-react'

export const DownloadButton = ()=>{
    const handleDownloadClick = () => window.open("https://play.google.com/store/apps/details?id=com.tranquiapp.v2", "_system")
    
    return (
        <button className={styles.main__button} onClick={handleDownloadClick}>
          <IconBrandGooglePlay /> Descargar en Play Store
        </button>
    )
}

interface SendEmailButton {
}

export const SendEmailButton = ()=>{
  return (
      <button className={styles.main__button} onClick={()=>{
        window.open("mailto:tomas@tdm.ar")
      }}>
        Envianos un correo
      </button>
  )
}