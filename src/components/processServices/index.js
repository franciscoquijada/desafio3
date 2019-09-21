import dataHero from '../../services/hero.services';

export const data  = dataHero.map((data) => {
    data.kill = false;
});

export default data;