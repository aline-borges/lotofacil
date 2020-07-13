import React, { Component } from 'react';
import { Tables, Block, Number} from './style';
import Input from '../input/Input';
import { Row } from '../container/style';
import Card from '../card/Card';
import api from '../../services/api';

export default class Table extends Component {
  state = {
    number: '',
    data: '',
    price: '',
    message: '',
    dataNext: '',
    sortNumbers: '',
  };

  componentDidMount() {
    this.loadRaffle();
  }

  loadRaffle = async () => {
    const response = await api.get();
    const dateResponse = response.data.data_concurso;
    const dateGame = new Date(dateResponse);
    const date = (dateGame.getDate() + '/' + (dateGame.getMonth() + 1) + '/' + dateGame.getFullYear());

    const dateNextGame = response.data.data_proximo_concurso;
    const dateNext = new Date(dateNextGame);
    const dateGameNext = (dateNext.getDate() + '/' + (dateNext.getMonth() + 1) + '/' + dateNext.getFullYear());

    this.setState({
      number: ('Nº: ' + response.data.numero_concurso),
      data: date,
      price: (response.data.valor_estimado_proximo_concurso).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
      message: response.data.acumulou === true ? 'Acumulou' : 'Não Acumulou',
      dataNext: dateGameNext,
      sortNumbers: response.data.dezenas
    })
  }
  
  
  render() {
    return(
      <Row>
        <Card number={this.state.number}
              text={'Último Resultado'}
              data={this.state.data}
              price={this.state.price}
              message={this.state.message}
              dataNext={this.state.dataNext}
        >
          <Tables>
            <Block>     
              <Number>{this.state.sortNumbers[0]}</Number>
              <Number>{this.state.sortNumbers[1]}</Number>
              <Number>{this.state.sortNumbers[2]}</Number>
              <Number>{this.state.sortNumbers[3]}</Number>
              <Number>{this.state.sortNumbers[4]}</Number>
            </Block>
            <Block>
              <Number>{this.state.sortNumbers[5]}</Number>
              <Number>{this.state.sortNumbers[6]}</Number>
              <Number>{this.state.sortNumbers[7]}</Number>
              <Number>{this.state.sortNumbers[8]}</Number>
              <Number>{this.state.sortNumbers[9]}</Number>
            </Block>
            <Block>
              <Number>{this.state.sortNumbers[10]}</Number>
              <Number>{this.state.sortNumbers[11]}</Number>
              <Number>{this.state.sortNumbers[12]}</Number>
              <Number>{this.state.sortNumbers[13]}</Number>
              <Number>{this.state.sortNumbers[14]}</Number>
            </Block>
        </Tables>
      </Card>

      <Input />
    </Row>
    );
  }
  
}