import React from 'react';
import { Padding, Row, NextBtn } from '../partials/Content/style';
import Grid from '@material-ui/core/Grid';
import TextInput from '../components/input';
import SelectInput from '../components/select';
import TextareaInput from '../components/textarea';

export default function Form(props) {
  return (
    <div>
      <form>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Padding>
              <TextInput name="f_name" label="First Name" type="text" />
            </Padding>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Padding>
              <TextInput name="l_name" label="Last Name" type="text" />
            </Padding>
          </Grid>
          <Grid item xs={6}>
            <Padding>
              <SelectInput
                name="gender"
                label="Gender"
                options={[
                  {
                    value: '',
                    name: 'Select',
                    disable: 'true',
                    seleced: 'true',
                  },
                  { value: '1', name: 'Female' },
                  { value: '2', name: 'Male' },
                  { value: '3', name: 'Non-binary' },
                ]}
              />
            </Padding>
          </Grid>
          <Grid item xs={6}>
            <Padding>
              <SelectInput
                name="age"
                label="Age"
                required
                options={[
                  {
                    value: '',
                    name: 'Select',
                    disable: 'true',
                    seleced: '',
                  },
                  { value: '1', name: 'Under 21' },
                  { value: '2', name: '21 - 25' },
                  { value: '3', name: '26 - 30' },
                ]}
              />
            </Padding>
          </Grid>
          <Grid item xs={12}>
            <Padding>
              <TextInput name="email" label="Email" type="email" />
            </Padding>
          </Grid>
          <Grid item xs={12}>
            <Padding>
              <SelectInput
                name="subject"
                label="Subject"
                required
                options={[
                  {
                    value: ``,
                    name: `Select`,
                    disable: `true`,
                    seleced: ``,
                  },
                  { value: `1`, name: `Subject 1` },
                  { value: `2`, name: `Subject 2` },
                ]}
              />
            </Padding>
          </Grid>
          <Grid item xs={12}>
            <Padding>
              <TextareaInput name="message" label="Message" type="text" />
            </Padding>
          </Grid>
          <Row>
            <NextBtn type="submit">Send</NextBtn>
          </Row>
        </Grid>
      </form>
    </div>
  );
}
