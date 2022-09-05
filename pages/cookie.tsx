import React from 'react'
import type { NextPage } from 'next'
import { Container, Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { Heading1, Heading2, Heading3, TimeDescription, Description } from 'src/components/Paragraphs'
import NavBar from 'src/components/NavBar'
import Footer from 'src/components/Footer/indexV2'

const Cookie: NextPage = () => {
  const { t } = useTranslation('footer')
  return (
    <Container maxWidth='lg'>
      <NavBar />
      <Heading1 sx={{ mt: '50px', mb: '10px' }}>{t('Cookie Policy')}</Heading1>
      <TimeDescription>{t('Page last updated： August 31, 2022')}</TimeDescription>
      <Box mt={['40px', '100px']} mb={['100px', '180px']}>
        <Heading2>{t('1. Basic information')}</Heading2>
        <Description>
          {t(
            'GotaBit has created this Privacy Policy to demonstrate our commitment to your privacy. This privacy policy ("Privacy Policy") will provide you with information about the collection, processing and use of personal data when using our website. It also describes your options regarding the use, access and correction of your personal information, as well as your rights in deciding how we use the information we collect or hold about you. Our goal is to empower you by providing you with simple and clear information so you can make informed decisions about our products and services.'
          )}
        </Description>
        <Description>
          {t(
            'GotaBit is the operator of this website as well as GotaBit.org (each of which is its own "Site", which together form an ecosystem of "Sites"). As an advocacy project, we believe that the protection of your personal data and privacy is very important. It is our policy to always respect your privacy and rights as it relates to any information we may collect from you when you visit the Site. We will only ask for your personal information when it is essential to provide the service. If this happens, it is our policy to collect, process and use your personal data in accordance with this Privacy Policy and in compliance with the General European Data Protection Regulation ("GDPR").'
          )}
        </Description>
        <Description>
          {t(
            'It is our policy to retain the above information for as long as necessary to provide you with the best browsing experience. The protection of such data is accomplished within the scope of commercially acceptable means. These steps are taken to mitigate data loss, theft, use and modification.'
          )}
        </Description>
        <Description>
          {t(
            'GotaBit will not disclose or share any of your data with third parties unless expressly required by law.'
          )}
        </Description>
        <Description>
          {t(
            'These "Sites" may from time to time link to third-party, external websites that we do not operate. GotaBit has no control over the content and practices of these sites and cannot be held responsible for their respective privacy policies.'
          )}
        </Description>
        <Description>
          {t(
            'If you provide us with personal data of any third parties (eg colleagues, family members, colleagues, etc.), it is your responsibility to ensure that those parties are familiar with this Privacy Policy. Likewise, you should only consider sharing their personal data with their express permission.'
          )}
        </Description>
        <Heading2>{t('2. Data processing related to the website')}</Heading2>
        <Heading3>{t('2.1 Visit our website')}</Heading3>
        <Description>
          {t(
            'Your hosting provider may collect information in server log files sent from your current browser each time you visit the Site. This information/data is neither assigned to you (a specific person) nor linked to data from other sources. This form of data is collected and processed to enable the full use of our website, to ensure the security and stability of our internal systems, to optimise our website and for statistical purposes.'
          )}
        </Description>
        <Description>
          {t(
            'In addition, IP addresses are evaluated together with other data. This is done to provide greater clarity, intelligence and protection in the event of an attack or other unauthorized use or misuse of the website and, where appropriate, to be used in criminal proceedings to investigate Notice related civil and criminal proceedings that users are not authorized to use and/or attack the "Site."'
          )}
        </Description>
        <Heading3>{t('2.2 Website browsing record favorites')}</Heading3>
        <Description>
          {t(
            `The "Site" uses cookies. We use cookies in a conscious, specific way in order to provide you, the end user, with the best browsing experience. Cookies are text files that are stored locally on a computer system by an Internet browser. For information on cookies and how they work, please visit: www.internetcookies.org.`,
            { nsSeparator: false }
          )}
        </Description>
        <Description>
          {t(
            'You can stop the setting of cookies via our website at any time by setting the corresponding settings of your selected Internet browser, thus permanently rejecting the setting of cookies. Previous cookies can also be deleted at any time. Deactivating and/or deleting cookies in the Internet browser used may result in a suboptimal use and experience of all features of the Site.'
          )}
        </Description>
        <Description>
          {t(
            'This collected data must be voluntarily provided in order to use this particular function of the Website in order to provide you with password-protected access to the essential data we store.'
          )}
        </Description>
        <Heading3>{t('2.3 Possibility to contact via the website')}</Heading3>
        <Description>
          {t(
            'You can contact us via our website contact page or by email to the following email address: contact@GotaBit.org. In order to process this inquiry, you must (voluntarily) provide the following information: name or alias, subject, email address, message.',
            { nsSeparator: false }
          )}
        </Description>
        <Description>
          {t(
            'We use this data, which you may voluntarily provide, only to answer your contact questions or answer your e-mails in the best possible way.'
          )}
        </Description>
        <Heading3>{t('2.4 Registration for the GotaBit Newsletter (if relevant)')}</Heading3>
        <Description>
          {t(
            'In order to subscribe to GotaBit News, you must voluntarily provide your name/alias and email address. By registering, you agree to the processing of the given data for the regular sending of the newsletter to the address you have given. All information collected in this way will never be passed or sold to any third party. At the end of each newsletter and in your initial opt-in email, a link is provided through which you can unsubscribe at any time.'
          )}
        </Description>
        <Heading3>{t('2.5 Social Media Data')}</Heading3>
        <Description>
          {t(
            'We include links to social networks such as plugins for social networks such as GitHub, YouTube, Reddit, Twitter, Facebook, Instagram, etc. By clicking on these links, the operators of the various social networks may record your presence on our website and may use this information. In this case, these third-party platforms are responsible for complying with their privacy policies, over which we have no authority. GotaBit is not responsible for the data collected by these personal social media platforms.'
          )}
        </Description>
        <Heading3>{t('2.6 Other parties who have access to the information we collect')}</Heading3>
        <Description>
          {t(
            'We do not disclose or share any personally identifiable information with third parties other than the provider of our website, except as required by law.'
          )}
        </Description>
        <Heading3>{t('2.7 International transfers of personal data')}</Heading3>
        <Description>
          {t(
            'We have the right to transfer your personal data to third parties abroad for the data processing purposes described in this Privacy Policy. These recipients are obligated to protect data privacy as described above. If the data protection level of a given country does not correspond to the European data protection level, we can ensure that the protection of your personal data always corresponds to the EU by complying with the GDPR.'
          )}
        </Description>
        <Heading3>{t('2.8 Data Security')}</Heading3>
        <Description>
          {t(
            'We use appropriate technical and organizational security measures to protect the personal data you store against manipulation, partial or total loss, and unauthorized access by others. As technology evolves, so do our security measures.'
          )}
        </Description>
        <Description>
          {t(
            'Please note that any data transmission over the Internet (for example, communications via email) is generally not secure and we are not responsible for data transmitted to us over the Internet. Unfortunately, absolute protection is technically impossible.'
          )}
        </Description>
        <Description>
          {t('This information does not apply to third-party websites and corresponding links given on our website.')}
        </Description>

        <Heading2>{t('3. Your rights regarding your data')}</Heading2>
        <Heading3>{t('3.1 Right to data confirmation')}</Heading3>
        <Description>
          {t(
            'You have the express right to obtain confirmation as to whether personal data concerning you is being processed. If you would like to take advantage of this right of confirmation, you can always contact the person in charge as described above in this Privacy Policy.'
          )}
        </Description>
        <Heading3>{t('3.2 Permission to access data')}</Heading3>
        <Description>
          {t(
            'You have the right to obtain information about your personal data and a copy of that information at any time. You can receive this information at any time by contacting the responsible persons described in this Privacy Policy.'
          )}
        </Description>
        <Heading3>{t('3.3 Right to Correction')}</Heading3>
        <Description>
          {t(
            'You have the right to correct inaccurate personal data relating to you. You have the right to request incomplete personal data, including providing a supplementary statement. You can receive this information at any time by contacting the responsible persons described in this Privacy Policy.'
          )}
        </Description>
        <Heading3>{t('3.4 Right to be forgotten')}</Heading3>
        <Description>
          {t(
            'You have the right to delete your personal data as soon as possible. You can contact the Responsible Person at any time as set out in the above Privacy Policy.'
          )}
        </Description>
        <Heading3>{t('3.5 Duration of data storage')}</Heading3>
        <Description>
          {t(
            'The processing and storage of personal data will only be carried out for as long as necessary to achieve the purpose of storage or to the extent permitted by applicable laws or regulations. If the purpose of storage is not applicable, or if the storage period stipulated by applicable law expires, personal data will be deleted periodically in accordance with legal requirements.'
          )}
        </Description>
        <Heading3>{t('3.6 Minors')}</Heading3>
        <Description>
          {t(
            'We do not knowingly collect or use any personal data of minors. Depending on the plugins and/or media channels used, minors may be willing to share personal information with others. If a minor provides us with their information without the consent of a parent or guardian, we will ask the parent or guardian to contact us to delete that information.'
          )}
        </Description>

        <Heading2>{t('4. Updates to our Privacy Policy')}</Heading2>

        <Description>
          {t(
            'We may update this Privacy Policy from time to time and notify you on the website that this policy has been modified. This applies to the latest version of the Privacy Policy posted on our website.'
          )}
        </Description>
        <Description>
          {t('If you have any questions about this Privacy Policy, please contact us at support@GotaBit.org.')}
        </Description>
      </Box>
      <Footer />
    </Container>
  )
}

export default Cookie
