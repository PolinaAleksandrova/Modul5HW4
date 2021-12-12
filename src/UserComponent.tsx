import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface IEmployee {
  name: string;
  job: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface IUserOnPage {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}

interface IUserProps {
  title: string;
  description: string;
}

const Cards = (props: IUserProps) => (
  <Card as="li"
  <div>{props.title}</div>
  {props.description}
  </div>
  </Card>
);

async function createUser() : Promise<IEmployee> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'morpheus', job: 'leader' })
  };

  async function updateUser() : Promise<IEmployee> {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'morpheus', job: 'zion resident' })
    };

    async function updateUserPatch() : Promise<IEmployee> {
      const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'morpheus', job: 'zion resident' })
      };

      export default UserComponent;
