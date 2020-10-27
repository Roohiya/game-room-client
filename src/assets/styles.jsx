import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 20px;
  color: #000000;
`

export const Status = styled.label`
  font-size: 15px;
  color: #000000;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameInput = styled.div`
  width: 500px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const GameDetails = styled.div`
  width: 100%;
  height: 100%;
`

export const CreateGame = styled.div`
  display: flex;
  flex-direction: column;
`

export const CreateGameLabel = styled.h2`
  font: 12px;
`

export const CreateGameDetails = styled.div`
  border: '1px solid black';
  display: flex;
  flex-direction: column;
`

export const JoinGame = styled.div`
  display: flex;
  flex-direction: column;
`

export const JoinGameLabel = styled.h2`
  font: 12px;
`

export const JoinGameDetails = styled.div`
  border: '1px solid black';
  display: flex;
  flex-direction: column;
`

export const OverlayInput = styled.input`
  width: auto;
  height: 50px;
  padding: 0 10px;
`

export const StartGame = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ff000;
  margin: 10px 0 0 auto;
`
