import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import AS400 from '@components/examples/AS400';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import Chessboard from '@components/Chessboard';
import CodeBlock from '@components/CodeBlock';
import ContentFluid from '@components/ContentFluid';
import ComboBox from '@components/ComboBox';
import DataTable from '@components/DataTable';
import DatePicker from '@components/DatePicker';
import DashboardRadar from '@components/examples/DashboardRadar';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Denabase from '@components/examples/Denabase';
import Dialog from '@components/Dialog';
import Divider from '@components/Divider';
import Drawer from '@components/Drawer';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Grid from '@components/Grid';
import HoverComponentTrigger from '@components/HoverComponentTrigger';
import Indent from '@components/Indent';
import Input from '@components/Input';
import IntDevLogo from '@components/svg/IntDevLogo';
import ListItem from '@components/ListItem';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import MessagesInterface from '@components/examples/MessagesInterface';
import ModalAlert from '@components/modals/ModalAlert';
import ModalCanvasSnake from '@components/modals/ModalCanvasSnake';
import ModalCanvasPlatformer from '@components/modals/ModalCanvasPlatformer';
import ModalChess from '@components/modals/ModalChess';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalError from '@components/modals/ModalError';
import ModalMatrixModes from '@components/modals/ModalMatrixModes';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import Navigation from '@components/Navigation';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Script from 'next/script';
import Select from '@components/Select';
import SidebarLayout from '@components/SidebarLayout';
import Table from '@components/Table';
import TableRow from '@components/TableRow';
import TableColumn from '@components/TableColumn';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import TreeView from '@components/TreeView';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';

export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://sacred.computer';
  const handle = '@internetxstudio';

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://wireframes.internet.dev'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/57a5715d-d332-47d0-8ec8-40cfa75bf36f.png',
          width: 1500,
          height: 785,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/57a5715d-d332-47d0-8ec8-40cfa75bf36f.png'],
      title,
      url,
    },
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">

      <DebugGrid />
      <DefaultActionBar />
      <Grid>


      <Accordion defaultValue={true} title="NAVIGATION BAR">
          <br />
          <br />
          <Card title="NAV">
            <Navigation
              logo="✶"
              left={
                <ModalTrigger modal={ModalError} modalProps={{ message: <>Non-fatal error detected: error FOOLISH (Please contact Sacred Computer support.)</>, title: `SETUP` }}>
                  <ActionButton>NAVIGATION ITEM A</ActionButton>
                </ModalTrigger>
              }
              right={
                <>
                  <ModalTrigger modal={ModalCreateAccount}>
                    <ActionButton>SIGN IN</ActionButton>
                  </ModalTrigger>
                </>
              }
            >
              <ModalTrigger
                modal={ModalError}
                modalProps={{
                  message: (
                    <>
                      Boot Manager has experienced a problem.
                      <br />
                      <br />
                      Status: 0xc000000f
                      <br />
                      <br />
                      Info: An error occured transferring excecution.
                      <br />
                      <br />
                      You can try to recover the system with the Recovery Tools.
                      <br />
                      <br />
                      If the problem continues, please contact your system administrator or computer manufacturer.
                    </>
                  ),
                  title: `BOOT DRIVER`,
                }}
              >
                <ActionButton>NAVIGATION ITEM B</ActionButton>
              </ModalTrigger>
            </Navigation>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="DASHBOARD RADAR">
          <Card>
              <DashboardRadar />
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="MESSAGES INTERFACE">
          This example combines the aesthetics of iMessage and IRSSI with a terminal-inspired design. It shows how easy it is to embed a simple web application into your website.
          <br />
          <br />
          <Card title="MESSAGES">
            <MessagesInterface />
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="MESSAGES">
          Messages in this library present a modern messaging experience through an MS-DOS–inspired aesthetic. Instead of rounded speech bubbles, messages appear in simple rectangular boxes, evoking a nostalgic, classic PC feel.
          <br />
          <br />
          <Card title="EXAMPLE">
            <Message>You create the world of the dream, you bring the subject into that dream, and they fill it with their subconscious.</Message>
            <MessageViewer>How could I ever acquire enough detail to make them think that its reality?</MessageViewer>
            <Message>Well dreams, they feel real while we're in them, right? It's only when we wake up that we realize how things are actually strange.</Message>
            <Message>Let me ask you a question, you, you never really remember the beginning of a dream do you? You always wind up right in the middle of what's going on.</Message>
            <MessageViewer>I guess, yeah.</MessageViewer>
            <Message>So how did we end up here?</Message>
          </Card>
          <br />
        </Accordion>

        <Accordion defaultValue={true} title="TREEVIEW">
          Tree Views are hierarchical list structures that allow users to navigate nested information or functionalities, commonly used for parent-child relationships like file directories or menus.
          <br />
          <br />
          <Card title="FILE SYSTEM">
            <TreeView defaultValue={true} isRoot title="Animal Kingdom">
              <TreeView defaultValue={true} title="Chordata">
                <TreeView defaultValue={true} title="Mammalia">
                  <TreeView defaultValue={true} title="Primates">
                    <TreeView title="Hominidae.csv" isFile />
                    <TreeView title="Cercopithecidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Carnivora">
                    <TreeView title="Felidae.csv" isFile />
                    <TreeView title="Canidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Cetacea">
                    <TreeView title="Delphinidae.csv" isFile />
                    <TreeView title="Balaenidae.csv" isFile />
                  </TreeView>
                </TreeView>
                <TreeView defaultValue={true} title="Mammalia Rejects"></TreeView>
                <TreeView defaultValue={true} title="Aves">
                  <TreeView defaultValue={true} title="Passeriformes">
                    <TreeView title="Corvidae.csv" isFile />
                    <TreeView title="Fringillidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Accipitriformes">
                    <TreeView title="Accipitridae.csv" isFile />
                    <TreeView title="Pandionidae.csv" isFile />
                  </TreeView>
                </TreeView>
                <TreeView defaultValue={true} title="Reptilia">
                  <TreeView defaultValue={true} title="Squamata">
                    <TreeView title="Viperidae.csv" isFile />
                    <TreeView title="Iguanidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Testudines">
                    <TreeView title="Cheloniidae.csv" isFile />
                    <TreeView title="Testudinidae.csv" isFile />
                  </TreeView>
                </TreeView>
              </TreeView>
              <TreeView defaultValue={true} title="Arthropoda">
                <TreeView defaultValue={true} title="Insecta">
                  <TreeView defaultValue={true} title="Coleoptera">
                    <TreeView title="Coccinellidae.csv" isFile />
                    <TreeView title="Scarabaeidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Diptera">
                    <TreeView title="Culicidae.csv" isFile />
                    <TreeView title="Syrphidae.csv" isFile />
                  </TreeView>
                </TreeView>
                <TreeView defaultValue={true} title="Arachnida">
                  <TreeView defaultValue={true} title="Araneae">
                    <TreeView title="Salticidae.csv" isFile />
                    <TreeView title="Theraphosidae.csv" isFile />
                  </TreeView>
                  <TreeView defaultValue={true} title="Scorpiones">
                    <TreeView title="Buthidae.csv" isFile />
                    <TreeView title="Scorpionidae.csv" isFile />
                  </TreeView>
                </TreeView>
              </TreeView>
            </TreeView>
          </Card>
          <br />
        </Accordion>
      </Grid>
      <ModalStack />
    </DefaultLayout>
  );
}
