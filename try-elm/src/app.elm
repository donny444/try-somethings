module Main exposing (..)

import Html exposing (beginnerProgram, button, div, text)
import Html.Events exposing (onClick)

initModel = 0

type Msg = Increment | Decrement

update msg model =
    case msg of
        Increment ->
            model + 1
        Decrement ->
            model - 1

view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model) ]
        , button [ onClick Increment ] [ text "+" ]
        ]

main = beginnerProgram { model = model , view = view , update = update }