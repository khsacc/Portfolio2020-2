import { ArticleTitle } from '../components/article';
import { NextPage } from 'next';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  wrap: {
    padding: '0 20px',

    textAlign: 'center',
  },
  name: {
    fontWeight: 'normal',
  },
  desc: {
    fontSize: '1.45rem',
  },
}));

const ResearchPage: NextPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <ArticleTitle img="/img/topPage/self.jpg" title="About Me" alt="self portrait" />
      <main>
        <h1 className={classes.name}>Hiroki Kobayashi</h1>
        <p className={classes.desc}>
          Student at Geochemical Research Centre, the University of Tokyo, working on the polymorphism of ice.
          <br />
          Interested in hydrogen-bonded science under high pressure. Usually uses Diamond Anvil Cells (DAC), X-ray
          diffraction, and Raman spectroscopy.
        </p>
        {/* <p className={classes.desc}>Interested in</p> */}
      </main>
    </div>
  );
};

export default ResearchPage;
