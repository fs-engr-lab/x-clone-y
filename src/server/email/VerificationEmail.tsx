import { Html, Head, Body, Heading, Text, Button, Tailwind, Container } from "@react-email/components";


type Props = {
    name: string;
    to: string;
    url: string;
}

export const VerificationEmail = ({ name, to, url }: Props) => {
    return (
        <Html lang="ja">
            <Head />
            <Tailwind>
                <Body>
                    <Text className="mb-2">(to:{to})</Text>
                    <Container className="flex flex-col gap-2">
                        <Heading>{name}様</Heading>
                        <Text>「Xクローン：Y」に、ご登録いただき、誠にありがとうございます。</Text>
                        <Container className="flex flex-col gap-1">
                            <Text>本登録を完了し、「Xクローン：Y」をご利用いただくためには、下記リンクをクリックして下さい。</Text>
                            <Button href={url}>
                                メールアドレスの確認
                            </Button>
                            <Text className="text-sm">有効期限：このリンクは発行から1週間有効です</Text>
                        </Container>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}
