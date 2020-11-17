import { Subtitle } from '../common';
import { makeStyles } from '@material-ui/core';

export const SelfSkills = () => {
  type Skill = {
    name: string;
    value: number;
    colour: {
      main: string;
    };
  };
  const adobeSkills: Skill[] = [
    {
      name: 'Illustrator',
      value: 80,
      colour: {
        main: '#f0a64d',
      },
    },
    {
      name: 'InDesign',
      value: 75,
      colour: {
        main: '#e749a0',
      },
    },
    {
      name: 'Photoshop',
      value: 30,
      colour: {
        main: '#46c8f0',
      },
    },
    {
      name: 'XD',
      value: 10,
      colour: {
        main: '#f05ff5',
      },
    },
  ];
  const webSkills: Skill[] = [
    {
      name: 'Vue / Nuxt',
      value: 45,
      colour: {
        main: '#41B883',
      },
    },
    {
      name: 'React / Next',
      value: 20,
      colour: {
        main: '#61DBFB',
      },
    },
  ];

  const classes = makeStyles(() => ({
    container: {
      background: 'white',
      padding: 10,
      borderRadius: 5,
      margin: '5px 0 10px',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    skill__name: {
      display: 'inline-block',
      width: 100,
    },
    skill__base: {
      width: '85%',
      height: '1em',
      background: '#ede8e9',
    },
    skill__value: {
      display: 'inline-block',
      height: '100%',
    },
  }))();

  return (
    <>
      <Subtitle>Skills</Subtitle>
      <p>
        使用頻度、経験や知識などを考えながら、大雑把にグラフにしてみました。
        <br />
        今後は写真や映像を使ったグラフィックに挑戦してみたいという気持ちがあります。
      </p>
      Design Apps
      <div className={classes.container}>
        {adobeSkills.map((e, i) => (
          <div className={classes.wrapper} key={`skill__1--${i}`}>
            <div className={classes.skill__name}>{e.name}</div>
            <div className={classes.skill__base}>
              <span className={classes.skill__value} style={{ background: e.colour.main, width: `${e.value}%` }}></span>
            </div>
          </div>
        ))}
      </div>
      Frontend Development
      <div className={classes.container}>
        {webSkills.map((e, i) => (
          <div className={classes.wrapper} key={`skill__1--${i}`}>
            <div className={classes.skill__name}>{e.name}</div>
            <div className={classes.skill__base}>
              <span className={classes.skill__value} style={{ background: e.colour.main, width: `${e.value}%` }}></span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
