import { NextPage } from 'next';
import { Parallax } from 'react-scroll-parallax';
import { Subtitle } from '../article/subtitle';
import { makeStyles } from '@material-ui/core';
// import theme from '../../styles/theme';
import { LineUmb } from '../common';
import { WorkCategory } from '../common/workCategory';
import { colours } from '../../styles';
import { padding } from '../../styles/global';

const FesInfo: NextPage<{ title: string; categories: string[]; info?: string }> = ({ title, categories, info }) => {
  const classes = makeStyles(() => ({
    wrapper: {
      textAlign: 'center',
    },
    fes_title: {
      marginBottom: 5,
    },
  }))();
  return (
    <>
      <div data-aos="fade-left" className={classes.wrapper}>
        <h2 className={classes.fes_title}>{title}</h2>
        {categories.map((e, i) => (
          <WorkCategory key={i}>{e}</WorkCategory>
        ))}
        {info}
      </div>
    </>
  );
};

export const Works: NextPage = () => {
  const classes = makeStyles(() => ({
    introduction: {
      textAlign: 'center',
      marginBottom: 150,
    },
    article__wrapper: {
      padding: padding.common,
    },
    img_container: {
      textAlign: 'center',
    },
    KF70_wrapper: {
      marginTop: 20,
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        transform: 'scale(1.025)',
      },
    },
    KF70_img: {
      width: '40%',
      // margin: '0 20vw',
    },
    MF92_img: {
      height: 300,
      margin: '15px 10px 0',
    },
    MF93_web: {
      height: 400,
      margin: '15px 10px 0',
    },
    separateUmb: {
      width: 100,
      color: colours.main.light,
      display: 'block',
      margin: '10px auto 60px',
    },
    othersImg: {
      height: 300,
      margin: '15px 10px 0',
    },
  }))();
  return (
    <div>
      <Subtitle>Works</Subtitle>
      <div className={classes.article__wrapper}>
        <p className={classes.introduction} data-aos="fade-up">
          まずは、大学生活で4度関わった学園祭のデザインから、代表的なものをご紹介。
        </p>
        <Parallax y={[10, -30]} data-aos="fade-up" className={classes.KF70_wrapper}>
          <FesInfo
            title="第70回駒場祭"
            categories={['Design Direction', 'Graphics', 'DTP Design']}
            info="2019年・共同制作（広報局長）"
          />
          <div className={classes.img_container}>
            <img
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-quad"
              src="/img/works/test_KF70.jpg"
              className={classes.KF70_img}
              alt=""
            ></img>
          </div>
        </Parallax>
        <Parallax y={[5, -40]} data-aos="fade-up">
          <FesInfo
            title="第92回五月祭"
            categories={['Information Signs', 'DTP Design']}
            info={'2019年・共同制作（案内制作担当・印刷物担当）'}
          />
          <div className={classes.img_container}>
            <img
              src="/img/works/MF92navi.jpg"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-quad"
              className={classes.MF92_img}
              alt=""
            ></img>
          </div>
        </Parallax>
        <Parallax y={[5, -40]} data-aos="fade-up">
          <FesInfo
            title="第93回五月祭"
            categories={['Web Frontend', 'DTP Design', 'Design Workshop']}
            info="2020年・共同制作（情報技術部・印刷物担当統括・オンライン支援検討ワーキンググループ）"
          />
          <div className={classes.img_container}>
            <img
              src="/img/works/MF93/web_goods.jpg"
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-easing="ease-out-quad"
              className={classes.MF93_web}
              alt=""
            />
            <img
              src="/img/works/MF93/web_online.jpg"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-easing="ease-out-quad"
              className={classes.MF93_web}
              alt=""
            />
          </div>
        </Parallax>
        <LineUmb className={classes.separateUmb} />
        <div className={classes.img_container}>
          <img src="/img/works/kasa/virtual_background.jpg" className={classes.othersImg} alt="" />
          <img src="/img/works/kasa/christmas_2020.jpg" className={classes.othersImg} alt="" />
          <img src="/img/works/kasa/card_2020.jpg" className={classes.othersImg} alt="" />
        </div>
      </div>
    </div>
  );
};
