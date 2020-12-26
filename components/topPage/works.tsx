import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Subtitle } from '../article/subtitle';
import { makeStyles } from '@material-ui/core';
// import theme from '../../styles/theme';
import { WorkCategory } from '../common/workCategory';

export const Works: NextPage = () => {
  const classes = makeStyles(() => ({
    introduction: {
      textAlign: 'center',
    },
    article__wrapper: {
      padding: '0 50px',
    },
    KF70_wrapper: {
      marginTop: 20,
    },
    KF70_img: {
      width: '40%',
      display: 'block',
      // margin: '0 20vw',
    },
    MF92_img: {
      height: 300,
      margin: '15px 10px 0',
    },
  }))();
  return (
    <div>
      <Subtitle>Works</Subtitle>
      <div className={classes.article__wrapper}>
        <p className={classes.introduction} data-aos="fade-up">
          まずは、大学生活で4度関わった学園祭のデザインから。
        </p>
        <Parallax y={[10, -30]} data-aos="fade-up" className={classes.KF70_wrapper}>
          <div data-aos="fade-left">
            <h2>第70回駒場祭</h2>
            {['Design Direction', 'Graphics', 'DTP Design'].map((e, i) => (
              <WorkCategory key={i}>{e}</WorkCategory>
            ))}
            2019年・共同制作（広報局長）
          </div>

          <img
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-cubic"
            src="/img/works/test_KF70.jpg"
            className={classes.KF70_img}
          ></img>
        </Parallax>
        <Parallax y={[-10, 20]} data-aos="fade-up">
          <div data-aos="fade-left">
            <h2>第92回五月祭</h2>
            {['Information Signs', 'DTP Design'].map((e, i) => (
              <WorkCategory key={i}>{e}</WorkCategory>
            ))}
            2019年・共同制作（案内制作担当・印刷物担当）
          </div>
          <img src="/img/works/MF92navi.jpg" className={classes.MF92_img}></img>
        </Parallax>
      </div>
    </div>
  );
};
