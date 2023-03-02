import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import logo from "../../pictures/Site-logo.png"
import { MyStyledLinkHeader } from "./HeaderStyle";


export function Header() {
    return (
        <>
            <Box sx={{
                bgcolor: "rgba(253,102,1,0.8)",
                height: 80,
                padding: 1,
                display: "flex",
                alignItems: "center",
            }}>
                <a href="https://bleach.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B8%D1%87_%D0%B2%D0%B8%D0%BA%D0%B8">
                    <img src={logo} alt="logo"/>
                </a>
                <Grid container spacing={2}>
                    <Grid item md={3}>
                        <MyStyledLinkHeader href="https://bleach.fandom.com/ru/wiki/%D0%9F%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B8">Персонажи</MyStyledLinkHeader>
                    </Grid>
                    <Grid item md={3}>
                        <MyStyledLinkHeader href="https://bleach.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B8%D1%87_%D0%B2%D0%B8%D0%BA%D0%B8:%D0%9F%D0%BE%D1%80%D1%82%D0%B0%D0%BB_%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D1%81%D1%82%D0%B2%D0%B0">Сообщество</MyStyledLinkHeader>
                    </Grid>
                    <Grid item md={3}>
                        <MyStyledLinkHeader href="https://bleach.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B8%D1%87">Блич</MyStyledLinkHeader>
                    </Grid>
                    <Grid item md={3}>
                        <MyStyledLinkHeader href="https://bleach.fandom.com/ru/wiki/%D0%91%D0%BB%D0%B8%D1%87_%D0%B2%D0%B8%D0%BA%D0%B8#">Исследовать</MyStyledLinkHeader>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}