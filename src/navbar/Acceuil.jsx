import React from'react';
import Blog from './blog';
import Grid from './grid';
import How from './how';
import ImageSlider from './slider';
import Suivire from './suivi';
export default function Accueil() {
    return(
        <>
        <ImageSlider/>
        <How/>
        <Grid/>
        <Blog/>
        <Suivire/>
        </>
    )
}