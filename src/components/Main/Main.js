import React from "react";
import { MainWrapper, ShadowSpan, MainTextWrapper } from "./MainStyled";
import { MainMenu } from "./MainMenu/MainMenu";
import { MainRight } from "./MainRight/MainRight";

export function Main() {
    return(
        <MainWrapper>
            <MainTextWrapper>
                <ShadowSpan>Тоширо Хицугая</ShadowSpan>  — капитан десятого отряда Готея 13.
                Его лейтенант — Рангику Мацумото. Ранее он служил 3-им офицером 10-го отряда под командованием
                Ишшина Шибы.
            </MainTextWrapper>
            <div className="MainMidWrapper">
                <MainMenu/>
                <MainRight/>
            </div>
        </MainWrapper>
    )
}