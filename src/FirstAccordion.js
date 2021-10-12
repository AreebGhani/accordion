import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function FirstAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            className="text-primary text-decoration-underline "
            label="I acknowledge that I should....."
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-danger" color="textSecondary">
            accepting your <span><a href="http://localhost:3000/" target="_blank" >Terms & Condition</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            className="text-primary text-decoration-underline "
            label="I accept that I should....."
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-danger" color="textSecondary">
          accepting your <span><a href="http://localhost:3000/" target="_blank" >Terms & Condition</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            className="text-primary text-decoration-underline "
            label="I claim that I should....."
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-danger" color="textSecondary">
          accepting your <span><a href="http://localhost:3000/" target="_blank" >Terms & Condition</a></span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}