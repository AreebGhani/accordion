import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function SecondAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading} style={{color:"red"}} >General settings</Typography>
          <Typography className={classes.secondaryHeading} style={{color:"blue"}} >Connections / Sounds / Display / Management / About</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"gray"}} >
            <div>"Connections" ⇒ [ wifi ∶ bluethoot ∶ flight mode ∶ more connections ]</div>
            <div>"Sounds" ⇒ [ volume ∶ media ∶ notification ∶ system ]</div>
            <div>"Display" ⇒ [ brightness ∶ font size & style ∶ screen timeout ∶ screen zoom ]</div>
            <div>"Management" ⇒ [ language ∶ date & time ∶ devices ∶ visibility enhancement ]</div>
            <div>"About" ⇒ [ status information ∶ legal information ∶ os information ∶ update ]</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading} style={{color:"red"}} >Users</Typography>
          <Typography className={classes.secondaryHeading} style={{color:"blue"}} > Accounts / Google Services / Privacy / Security </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"gray"}} >
          <div>"Accounts" ⇒ [ manage ∶ backup ∶ restore ∶ reset ]</div>
          <div>"Google Services" ⇒ [ ∶ account ∶ devices ∶ control ∶ set up & restore ]</div>
          <div>"Privacy" ⇒ [ permissions ∶ services ∶ activity ∶ diagnostics ]</div>
          <div>"Security" ⇒ [ biometrics ∶ protection ∶ encrypt ∶ other ]</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading} style={{color:"red"}} >Advanced settings</Typography>
          <Typography className={classes.secondaryHeading} style={{color:"blue"}} > Auto / Gestures / Dual Apps / Data Transfer </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"gray"}} >
          <div>"Auto" ⇒ [ connect ∶ general ∶ notification ∶ about ]</div>
          <div>"Gestures" ⇒ [ screen ∶ sensors ∶ windows ∶ animations ]</div>
          <div>"Dual App" ⇒ [ clones ∶ manage ∶ setting ∶ about ]</div>
          <div>"Data Transfer" ⇒ [ smart switch ∶ send ∶ receive ∶ usage ]</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading} style={{color:"red"}} >Personal data</Typography>
          <Typography className={classes.secondaryHeading} style={{color:"blue"}} > Info / Setting / About </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"gray"}} >
          <div>"Info" ⇒ [ Change ∶ Update ∶ Backup ]</div>
          <div>"Setting" ⇒ [ privacy ∶ security ∶ account ]</div>
          <div>"About" ⇒ [ device ∶ logs ]</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
   </div>
  );
}