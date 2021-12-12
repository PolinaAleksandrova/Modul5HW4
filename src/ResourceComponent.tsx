import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';

interface IResource {
   id: number;
   name: string;
   year: string;
   color: string;
   pantone_value: string;
 }

 interface IResourceOnPage {
   page: number;
   per_page: number;
   total: number;
   total_pages: number;
  }


export default ResourceComponent;
