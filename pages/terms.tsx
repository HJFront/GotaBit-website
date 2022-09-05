import React from 'react'
import type { NextPage } from 'next'
import { Container, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import {
  Heading1,
  Heading2,
  Heading3,
  TimeDescription,
  Description,
  DescriptionWithBullet,
} from 'src/components/Paragraphs'
import NavBar from 'src/components/NavBar'
import Footer from 'src/components/Footer/indexV2'

const Terms: NextPage = () => {
  const { t } = useTranslation('footer')
  return (
    <Container maxWidth='lg'>
      <NavBar />
      <Heading1 sx={{ mt: '50px', mb: '10px' }}>{t('Terms of Service')}</Heading1>
      <TimeDescription>{t('Page last updated： August 31, 2022')}</TimeDescription>
      <Box mt={['40px', '100px']} mb={['100px', '180px']}>
        <Typography
          sx={{
            color: 'text.primary',
            fontSize: '16px',
            marginBottom: '16px',
            fontWeight: 600,
          }}
        >
          {t(
            `Please read these Terms of Use before using the GotaBit website or any of GotaBit's services or products.`
          )}
        </Typography>
        <Heading2>{t('Accept the terms of use')}</Heading2>
        <Description>
          {t(
            'These Terms of Service and any terms expressly contained herein (the "Terms") shall govern your access to and use of any services offered by GotaBit, including the use of the website www.GotaBit.org (the "Site") or mobile applications and provided by GotaBit any other related services (collectively, the "Sites").'
          )}
        </Description>
        <Description>
          {t(
            'Please read these terms of use carefully before starting to use the site. These are your rights and privileges. By clicking the "I Agree" button or checkbox accompanying these Terms, or if earlier by accessing or using any of the Services, you agree to be bound by these Terms and the following:',
            { nsSeparator: false }
          )}
        </Description>
        <DescriptionWithBullet>
          {t(
            'Our Privacy Policy, which is incorporated herein by reference; and our Website Visit Recording Policy, which is incorporated herein by reference.'
          )}
        </DescriptionWithBullet>
        <Description>
          {t('IF YOU DO NOT AGREE TO THESE TERMS OF USE OR PRIVACY POLICY, YOU MAY NOT ACCESS OR USE THE SITE.')}
        </Description>
        <Description>
          {t(
            `GotaBit reserves the right to modify these Terms at any time by providing notice of changes, such as by sending you an email, by providing notice through the Service, or by updating the "Last Updated" date at the top of these Terms. All changes will be effective as soon as we post them. By clicking the "I Agree" button or checkbox accompanying the revised terms, or by continuing to access or use the Services, you agree to the revised terms. If you do not agree to any modifications to these terms, you must stop using the service immediately. Your continued use of the Site and all of GotaBit's services following the public posting of the revised Terms of Use means that you agree and accept all changes. It is your responsibility to check this page frequently to stay informed of any changes.`
          )}
        </Description>
        <Heading2>{t('Risk disclosure')}</Heading2>
        <Description>
          {t(
            `Risk disclosure of your financial information and instruments by accessing or using any of GotaBit's websites and/or services and/or having any complex and potentially risky financial transactions that you are voluntarily choosing to engage in is solely your own responsibility Decide. As well as potentially holding and owning valuable assets. You further understand that you are aware of the many risks associated with the use of these services and are involved in transactions in cryptocurrencies (including but not limited to technical) failures (including but not limited to blockchain technical issues) and hacking. GotaBit strives to provide the latest systems, privacy and security. Issues related to your use of the GotaBIt service, including technical difficulties in depositing or sending passwords, it may take days, weeks or months to resolve, and some issues may not be resolved at all. By agreeing to these terms, you acknowledge that neither GotaBIt nor anyone unrelated to the GotaBit ecosystem is responsible for the risks of implementation, and that you voluntarily assume and assume such risks as a result of engaging in crypto. Be your own bank, do your own research. be careful. Guarantee the exercise of individual liberties!`
          )}
        </Description>
        <Heading2>{t('Who can use the site')}</Heading2>
        <Description>
          {t(
            `The GotaBit website and all services are reasonably available to the public and available to users over the age of 13. The GotaBit website and all services are not intended for children under the age of 13. By using and using GotaBit's website and all services, you represent and warrant that you (i) are at least 13 years old, (ii) are not prohibited from using GotaBit's website and all services under any applicable law, and (iii) only use GotaBit's The website and all services are for personal use. If you do not meet these requirements, you must not access or use this website or any of GotaBit's services.`
          )}
        </Description>
        <Heading3>{t('Access to websites, services and account security')}</Heading3>
        <Description>
          {t(
            `GotaBit reserves the right to withdraw or modify the GotaBit website and all services, any services or materials we provide on the website, and all GotaBit services at its sole discretion and without notice. Of course, we will do our best to keep you informed. Even so, there is no guarantee that the website, services or any content on the website will always be available or that it will be interrupted. We will not be liable if for any reason all or any part of the website or any of GotaBit's services is unavailable at any time, for any period. It is entirely reasonable that we may restrict access to certain parts of the website or restrict access to the entire website depending on the needs of the user, especially in the event of upgrades and/or major changes to the content.`
          )}
        </Description>
        <Heading3>{t('You are solely responsible for:', { nsSeparator: false })}</Heading3>
        <DescriptionWithBullet>
          {t(`Make all necessary arrangements to give you access to the website and its content.`)}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Make sure that all persons accessing the site through your sinternet connection understand and abide by these terms of use.`
          )}
        </DescriptionWithBullet>
        <Description>
          {t(
            `In some cases, in order to access the website or certain resources provided by GotaBit, you may be asked to provide certain registration details or other information that may or may not be of a personal nature. Use of the website is conditional on the fact that all information you provide on the website is correct, current and complete. You agree that all information you provide to register using these sites or otherwise, including but not limited to use of any interactive features on the site, is subject to our Privacy Policy, and you agree to all actions we take with respect to your information In accordance with our Privacy Policy.`
          )}
        </Description>
        <Description>
          {t(
            `In accordance with good practice, you should always exercise caution when sharing personal information to any website or service on a public or shared computer. On the GotaBit website and/or services are no exception.`
          )}
        </Description>
        <Heading2>{t('Intellectual property')}</Heading2>
        <Description>
          {t(
            `The website and services and products and their entire content, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, design, selection and arrangement) are owned by GotaBit, its licensors or such other providers of the material and are protected by copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.`
          )}
        </Description>
        <Description>
          {t(
            `Unless otherwise marked: (a) all material, data and information on the website, such as data files, text, music, audio files or other sounds, photographs, videos or other images, but excluding any software or computer code ( Collectively, the "Non-Code Content") is licensed under the Creative Commons Attribution 4.0 International License; (b) All software or computer code (collectively, the "Code Content") is licensed under the MIT License.`,
            { nsSeparator: false }
          )}
        </Description>
        <Heading2>{t('The following uses are prohibited')}</Heading2>
        <Description>
          {t(
            `You may only use the Site and Services for lawful purposes and in accordance with these Terms of Use. You agree not to use this website:`,
            { nsSeparator: false }
          )}
        </Description>
        <DescriptionWithBullet>
          {t(
            `In any manner that violates federal, state, local or international laws or regulations (including, without limitation, data or software export laws to and from the United States or other countries).`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `To exploit, harm or attempt to exploit or harm a minor in any way, by exposing the minor to inappropriate content, requesting personally identifiable information or otherwise.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Send, knowingly receive, upload, download, use or reuse any material that does not comply with these Terms of Use.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `To transmit or cause to be sent any advertising or promotional material, including any "junk mail", "chain letter" or "junk mail" or any other similar solicitation, without our prior written consent.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Impersonate or attempt to impersonate another person or any other person or entity (including, without limitation, by using an email address or screen name associated with any of the above).`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Engage in any other action that restricts or prohibits anyone from using or enjoying this website, or which we determine may harm or hold GotaBit or users of this website liable.`
          )}
        </DescriptionWithBullet>
        <Description>{t(`In addition, you agree not to:`, { nsSeparator: false })}</Description>

        <DescriptionWithBullet>
          {t(
            `Use the Site in any way that may disable, aggravate, damage or impair the Site or interfere with any other party's use of the Site, including their ability to engage in real-time activities through the Site.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Use any robot, spider or other automatic device, process or means to access the website for any purpose, including monitoring or copying any material on the website.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Use any manual process to monitor or reproduce any material on the Site or for any other unauthorized purpose without our prior written consent.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(`Use any device, software or routine that interferes with the proper functioning of the website.`)}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Introduce any viruses, Trojan horses, worms, logic bombs or other material that is malicious or technologically harmful.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(
            `Attempt to gain unauthorized access to, interfere with, disrupt or destroy any part of the website, the website's storage server or any server, computer or database connected to the website.`
          )}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(`Attack a website through a denial of service attack or a distributed denial of service attack.`)}
        </DescriptionWithBullet>
        <DescriptionWithBullet>
          {t(`Attempt to interfere with the proper working of the website.`)}
        </DescriptionWithBullet>

        <Heading2>{t('Reliability of Information Release')}</Heading2>
        <Description>
          {t(
            `The information provided on or through the website is for general information only. We do not warrant the accuracy, completeness or usefulness of this information. Any reliance you place on such information is entirely at your own risk. We disclaim all liability arising from your or any other visitor's reliance on the website, or any reliance on such material by anyone notified of any of its contents.`
          )}
        </Description>
        <Description>
          {t(
            `This website contains content provided by third parties, including materials provided by other users, bloggers and third-party licensors, syndicates, aggregators and/or reporting services. All statements and/or opinions expressed in these materials, as well as all articles and responses to questions and other content, are solely the opinions and responsibilities of the individual or entity providing these materials. These materials do not necessarily reflect the views of GotaBit as a decentralized community governance system (DAO). We are not responsible for the content or accuracy of any material provided by any third party and are not responsible to you or any third party.`
          )}
        </Description>

        <Heading2>{t('Website changes')}</Heading2>
        <Description>
          {t(
            `We may update the content on these sites from time to time, but the content is not necessarily complete or current. Any material on the website may be out of date at any given time and we are under no obligation to update such material.`
          )}
        </Description>

        <Heading2>{t('Information about you and your visits to the website')}</Heading2>
        <Description>
          {t(
            `All information we collect on these sites is subject to our Privacy Policy. By using this website, you agree to all actions we take with regard to your information in accordance with our Privacy Policy.`
          )}
        </Description>

        <Heading2>{t('Links to Websites and Social Media Features')}</Heading2>
        <Description>
          {t(
            `You may link to our home page, provided that you link to our home page in a fair and legal manner and do not damage or exploit our reputation, but you must not suggest linking in any form without our express Written consent, our association, approval or endorsement.`
          )}
        </Description>

        <Heading2>{t('Website link')}</Heading2>
        <Description>
          {t(
            `If the website contains links to other websites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner ads and sponsored links. We have no control over the content of these sites or resources and are not responsible for any loss or damage caused by the use of these sites or resources or the use of the resources. If you decide to visit any third party website linked from this website, you do so entirely at your own risk and in compliance with the terms and conditions of use of such website. We reserve the right to withdraw linking permission without notice.`
          )}
        </Description>

        <Heading2>{t('Geographic restrictions')}</Heading2>
        <Description>
          {t(
            `We make no representation that the website or any of its content is accessible or appropriate in your region. It may not be legal for certain people or in certain countries to access the website. You access the website on your own initiative and are responsible for compliance with local laws.`
          )}
        </Description>

        <Heading2>{t('Disclaimer')}</Heading2>
        <Description>
          {t(
            `You understand that we cannot and do not guarantee that files that may be downloaded from the Internet or the website are free of viruses or other destructive code. It is your responsibility to implement adequate procedures and checkpoints to meet your particular requirements for antivirus protection and accuracy of data input and output, and to maintain a means external to our website to reconstruct any lost data. We are not responsible for any loss or damage caused by your personal use of distributed denial of service attacks, viruses or other technologically harmful material as we may affect your computer equipment, computer programs, data or other specialized There are materials available through the website for any service or item, or for any material you post on the website or download from any website linked to the website.`
          )}
        </Description>
        <Description>
          {t(
            `Your use of the website, its content, and any services or items available through the website is at your own risk. This website, its content, and any services or items available through this website are provided on an "as is" and "as available" basis without warranty of any kind, express or implied. Neither GotaBit nor anyone associated with GotaBit makes any warranties or representations about the completeness, security, reliability, quality, accuracy or availability of the website. Without limiting the foregoing, neither GotaBit nor anyone associated with GotaBit represents that this website, its content, or any services or items available through this website will be accurate, reliable, false, inaccurate, inaccurate, inaccurate , incorrect or incorrect The site or server that provides this functionality is free of viruses or other harmful components, or the site or any service or item provided by the site would otherwise meet your needs or expectations.`
          )}
        </Description>
        <Description>
          {t(
            `GotaBit hereby disclaims all warranties of any kind, express or implied, statutory or otherwise, including, but not limited to, any warranties of merchantability, non-infringement and fitness for a particular purpose.`
          )}
        </Description>
        <Description>
          {t(
            `SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES OR LIMITATIONS ON THE DURATION OF IMPLIED WARRANTIES, SO THE ABOVE DISCLAIMER OF WARRANTIES MAY NOT APPLY TO YOUR ENTITY, BUT WILL APPLY TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.`
          )}
        </Description>

        <Heading2>{t('Liability and Limitation')}</Heading2>
        <Description>
          {t(
            `In no event shall GotaBit, its affiliates or their licensors, service providers or affiliated individuals be liable for damages of any kind, whether arising out of, or in connection with, your use under any legal theory In connection with, , any website to which it is linked, any content on this website or any other website or any service or item obtained through this website or other website, including any direct, indirect, special, incidental, consequential, unintentional or unintentional, personal injury, pain and suffering, emotional distress, loss of income, loss of profits, loss of business or anticipated savings, loss of use, loss of goodwill, loss of data, and tort (including negligence) arising out of contract or otherwise way, even if predictable. The foregoing does not affect any liability that cannot be excluded or limited under applicable law (including fraud).`
          )}
        </Description>

        <Heading2>{t('Compensation')}</Heading2>
        <Description>
          {t(
            `You agree to be liable for any claims, liabilities, damages, judgments, awards, losses, costs arising out of or in connection with your breach of these Terms of Use or your use of this website (including, without limitation, any use of the content, services and use of this website) , fees or expenses (including reasonable attorneys' fees) for the Products expressly authorized in these Terms of Use or your use of any information obtained from the Site.`
          )}
        </Description>

        <Heading2>{t('Waiver and Severability')}</Heading2>
        <Description>
          {t(
            `No waiver by GotaBit of any term or condition set forth in these Terms of Use shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and GotaBit's failure to assert a right or these Terms of Use No provision in this right or provision shall constitute a waiver of that right or provision.`
          )}
        </Description>
        <Description>
          {t(
            `If any provision of these Terms of Use is held for any reason by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable, then such provision shall be eliminated or limited to the minimum extent so that the Terms of Use will remain in full force and effect.`
          )}
        </Description>

        <Heading2>{t('Full agreement')}</Heading2>
        <Description>
          {t(
            `The Terms of Use, our Privacy Policy and Conditions of Event Registration constitute the sole and complete agreement between you and GotaBit with respect to the Site and supersede all prior and contemporaneous understandings, agreements, representations and warranties, both in writing and with respect to the Site. oral expression.`
          )}
        </Description>

        <Heading2>{t('Your comments and concerns')}</Heading2>
        <Description>
          {t(
            `This website is operated by the GotaBit decentralized management system DAO and the GotaBit Foundation. All other feedback, comments, requests for technical support and other communications related to the website should be directed to: support@GotaBit.org.`,
            { nsSeparator: false }
          )}
        </Description>
      </Box>
      <Footer />
    </Container>
  )
}

export default Terms
