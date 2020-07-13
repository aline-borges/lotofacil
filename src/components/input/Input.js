import React, { Component } from 'react';
import { ContainerInput, UserInput, Label} from './style';
import { Tables, Block, Number} from '../table/style';
import Button from '../button/Button';
import api from '../../services/api';

const myNumbers = [];

const AddNumber = (props) => {
  return(
    myNumbers.push(props.value)
  );
}

console.log(myNumbers)


export default class Input extends Component {
  state = {
    qualquercoisa: ''
  }

  componentDidMount() {
    this.loadNumbers();
  }

  loadNumbers = async () => {
    const response = await api.get();
    const sortNumbers = response.data.dezenas;
  }

  
  render() {
    return(
      <ContainerInput>
        <Label>Número do Concurso:</Label>
        <UserInput/>
        <Label>Dezenas Escolhidas:</Label>
        <Tables>
          <Block>
            <Number value={'01'} onClick={AddNumber}>01</Number>
            <Number>02</Number>
            <Number>03</Number>
            <Number>04</Number>
            <Number>05</Number>
          </Block>
          <Block>
            <Number>06</Number>
            <Number>07</Number>
            <Number>08</Number>
            <Number>09</Number>
            <Number>10</Number>
          </Block>
          <Block>
            <Number>11</Number>
            <Number>12</Number>
            <Number>13</Number>
            <Number>14</Number>
            <Number>15</Number>
          </Block>
          <Block>
            <Number>16</Number>
            <Number>17</Number>
            <Number>18</Number>
            <Number>19</Number>
            <Number>20</Number>
          </Block>
          <Block>
            <Number>21</Number>
            <Number>22</Number>
            <Number>23</Number>
            <Number>24</Number>
            <Number>25</Number>
          </Block>
        </Tables>
        <Button>Verificar</Button>
      </ContainerInput>
    );
  }

}
