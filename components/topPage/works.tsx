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

type ImgData = {
  name: string;
  namePosition: {
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
  };
  dir: 'left' | 'right';
  src: string;
  className: string;
  alt?: string;
};

const ImgContainer: NextPage<{ data: ImgData[] }> = ({ data }) => {
  const classes = makeStyles(() => ({
    wrapper: {
      textAlign: 'center',
    },
    eachImgWrapper: {
      display: 'inline-block',
      height: 'fit-content',
      width: 'fit-content',
      position: 'relative',
      overflow: 'hidden',
      '&:hover': {
        '& $eachImgName': {
          opacity: 1,
          padding: '5px 10px 2px',
        },
      },
    },
    eachImgName: {
      position: 'absolute',
      opacity: 0,
      color: 'white',
      background: colours.main.img_name,
      transition: 'all 0.5s ease-out',
      padding: '5px 0 2px',
    },
    eachImg: {
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        transform: 'scale(1.02)',
      },
    },
  }))();
  return (
    <div className={classes.wrapper}>
      {data.map((datum, index) => (
        <div
          className={classes.eachImgWrapper}
          key={index}
          data-aos={`fade-${datum.dir}`}
          data-aos-duration="800"
          data-aos-easing="ease-out-quad"
        >
          <img src={datum.src} className={[datum.className, classes.eachImg].join(' ')} alt={datum.alt ?? ''} />
          <span className={classes.eachImgName} style={{ ...datum.namePosition }}>
            {datum.name}
          </span>
        </div>
      ))}
    </div>
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
    description: {
      textAlign: 'center',
    },
    img_container: {
      textAlign: 'center',
    },
    KF70_wrapper: {
      marginTop: 20,
      transition: 'transform 0.5s ease-in-out',
      '&:hover': {
        // transform: 'scale(1.005)',
      },
    },
    KF70_img: {
      height: 500,
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
          <p className={classes.description} data-aos="fade-left">
            広報の文脈で世に出される全てのデザインに責任を持つ立場での学園祭でした。
            <br />
            「学園祭のキャンパスを廻る」ことを「万華鏡を回す」ことに喩え、様々な出会いや景色を愉しんでもらいたいという思いを込めています。
            <br />
            自分で作るより、他の委員と一緒に考える時間の方がずっと多く、指針の定め方などディレクション面での学びが多かったです。
          </p>
          <ImgContainer
            data={[
              {
                name: '公式ポスター',
                namePosition: { left: 0, top: 0 },
                src: '/img/works/KF70_poster.jpg',
                dir: 'left',
                className: classes.KF70_img,
              },
            ]}
          />
          {/* <div className={classes.img_container}>
            <div style={{ display: 'inline-block', height: 'fit-content', width: 'fit-content', position: 'relative' }}>
              <span style={{ position: 'absolute', top: 0, left: 0 }}>ポスター</span>
              <img
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-out-quad"
                src="/img/works/KF70_poster.jpg"
                className={classes.KF70_img}
                alt=""
              ></img>
            </div>
          </div> */}
        </Parallax>
        <Parallax y={[5, -40]} data-aos="fade-up">
          <FesInfo
            title="第92回五月祭"
            categories={['Information Signs', 'DTP Design']}
            info={'2019年・共同制作（案内制作担当・印刷物担当）'}
          />
          <p className={classes.description} data-aos="fade-left">
            パンフレット制作に携わる傍ら、案内サインシステムの制作を経験した回です。 <br />
            学園祭全体のビジュアル計画には関わっていませんが、
            <br />
            「〈おもしろい〉が交差する」というテーマを、無機質になりがちな案内サインの中に取り入れて、ビジュアルデザイン的な面白さも併存するように工夫しています。
          </p>
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
        <Parallax y={[20, -30]} data-aos="fade-up">
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
        <div className={classes.description}>other works</div>
        <div className={classes.img_container}>
          <img
            src="/img/works/kasa/virtual_background.jpg"
            className={classes.othersImg}
            alt=""
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-out-quad"
          />
          <img
            src="/img/works/kasa/christmas_2020.jpg"
            className={classes.othersImg}
            alt=""
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-easing="ease-out-quad"
          />
          <img
            src="/img/works/kasa/card_2020.jpg"
            className={classes.othersImg}
            alt=""
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-out-quad"
          />
        </div>
      </div>
    </div>
  );
};
