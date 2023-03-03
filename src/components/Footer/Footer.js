import React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FooterWrapper, FooterListTitle, FooterListItemLink } from "./FooterStyled";


export function Footer() {
    return (
        <FooterWrapper>
            <Grid container spacing={3}>
                <Grid item lg={3}>
                    <List>
                        <ListItem>
                            <FooterListTitle> Наши ресурсы</FooterListTitle>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.fandom.com/explore-ru?uselang=ru">Fandom</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.muthead.com/">Muthead</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.futhead.com/">Futhead</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.fanatical.com/">Fanatical</FooterListItemLink>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item lg={3}>
                    <List>
                        <ListItem>
                            <FooterListTitle>Обзор</FooterListTitle>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="">Что такое Фендом</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.fandom.com/what-is-fandom">О нас</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.fandom.com/about?uselang=ru">Обратная связь</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://community.fandom.com/Sitemap">Общая карта сайта</FooterListItemLink>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item lg={3}>
                    <List>
                        <ListItem>
                            <FooterListTitle>Сообщество</FooterListTitle>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://community.fandom.com/ru/">Вики сообщества</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://fandom.zendesk.com/hc/ru">Поддержка</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://community.fandom.com/ru/wiki/%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0:%D0%A1%D0%BE%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D0%BD%D0%B8%D0%B5">Справка</FooterListItemLink>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item lg={3}>
                    <List>
                        <ListItem>
                            <FooterListTitle>Реклама на сайте</FooterListTitle>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://about.fandom.com/mediakit">Медиа-кит</FooterListItemLink>
                        </ListItem>
                        <ListItem>
                            <FooterListItemLink href="https://www.fandomatic.com/">Fandomatic</FooterListItemLink>
                        </ListItem>

                    </List>
                </Grid>
            </Grid>
        </FooterWrapper>
    )
}