import { UserAtom } from '@utils/functions';
import { useAtom } from 'jotai';
import React from 'react';

const FooterOfRecipe = () => {
    const [User] = useAtom(UserAtom);
    return (
        <div className='absolute bottom-0' >
            <div className=' flex justify-between text-center'>
                <h2 className='w-72 border-t-2 border-black'>
                    Customer Signature
                </h2>
                <h2 className='w-72 border-t-2 border-black'>
                    Authorized Signature({User?.full_name})
                </h2>
            </div>
            <div className='mt-4'>
                <p className='text-xs italic '>The warrenty is not applicable to Headphones,Memory Card, Data Cable, Sticker removed items, Burnt and Physically damage items.
                    <span className='block'>Please take delivery within one month, after that time the authority will not be responsible.</span>
                </p>
            </div>
        </div>
    );
};

export default FooterOfRecipe;