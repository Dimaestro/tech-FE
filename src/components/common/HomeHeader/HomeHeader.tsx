import React, {ReactNode} from 'react';

interface IHomeHeader {
    children: ReactNode;
}

const HomeHeader: React.FC<IHomeHeader> = ({ children }) => {
    return (
        <header>
            { children }
        </header>
    );
};

export default HomeHeader;
