import React from 'react';

export default function Footer({ tableCount }) {
  return (
    <footer>
      <p className="flex items-center justify-between p-4 bg-green-500 text-black">
        {tableCount} Locations World Wide
        &copy;2023
      </p>
    </footer>
  );
}
