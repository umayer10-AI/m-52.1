import { Spinner } from '@heroui/react';
import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="flex justify-center my-10 items-center gap-2">
        <Spinner size="xl" />
      </div>
        </div>
    );
};

export default loading;