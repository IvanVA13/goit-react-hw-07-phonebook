import Section from './Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  return (
    <>
      <Section title={'Phonebook'} main={true}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
