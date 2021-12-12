import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

interface ISuccessfulLogIn {
  id: number;
  token: string;
}

interface IUnsuccessfulLogIn {
  error: string;
}

interface ILogInProps {
  title: string;
  description: string;
}

const ListItem = (props: ILogInProps) => (
  <Card as="li"
  <div>{props.title}</div>
  {props.description}
  </div>
  </Card>
);

async function postSuccessfulLogIn() : Promise<ISuccessfulLogIn> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: 'eve.holt@reqres.in', password: 'cityslicka' })
  };

  async function postUnsuccessfulLogIn() : Promise<IUnsuccessfulLogIn> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'peter@klaven', error: 'Missing password' })
    };

  async function postSuccessfulRegistr() : Promise<ISuccessfulLogIn> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'eve.holt@reqres.in', password: 'pistol' })
    };

  async function postUnsuccessfulRegistr() : Promise<IUnsuccessfulLogIn> {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'sydney@fife', error: 'Missing password' })
    };

export default AuthComponent;
