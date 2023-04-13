import { Box } from 'components/global/Box';
import { TelLink, AddressLink } from './Contacts.styled';

export const Contacts = () => {
  return (
    <>
      <Box display="flex" flexDirection="column">
        <TelLink href="tel:+380670000000" rel="noreferrer noopener nofollow">
          +38 067 00 000 00
        </TelLink>
        {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.54784216427!2d30.47674491606188!3d50.44952227947524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce88b1f1ad11%3A0xfecc0660e534a3fe!2z0L_RgNC-0YHQvy4g0J_QvtCx0LXQtNGLLCAxNiwg0JrQuNC10LIsINCj0LrRgNCw0LjQvdCwLCAwMjAwMA!5e0!3m2!1sru!2sro!4v1678558948136!5m2!1sru!2sro"
            title="Map"
            width="600"
            height="450"
            // style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
            Україна, м. Київ, вул. Перемоги, 16/23
          </iframe> */}
        <AddressLink
          href="https://goo.gl/maps/DYcfKyohoAWPzknK6"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Україна, м. Київ, вул. Перемоги, 16/23
        </AddressLink>
      </Box>
    </>
  );
};
