import React from 'react';
import { Outlet } from 'react-router';

function WebLayout() {
  return (
    <section>
      <div className="bg-red-500 w-full absolute">head</div>
      <main className="min-h-screen bg-green-400">
        child
        <Outlet />
      </main>
      <div className="bg-yellow-400">foot</div>
    </section>
  );
}

export default WebLayout;
