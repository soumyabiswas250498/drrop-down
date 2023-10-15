import React from 'react';
import Dropdown from '@/components/Dropdown';

export default function testpage() {
  return (
    <div className=" grid place-content-center h-screen w-full">
      <div className="flex justify-center items-center">
        <p>Hello this is the page to test</p> <Dropdown />
        <p>I hope this would be awsome.</p>
      </div>
    </div>
  );
}
