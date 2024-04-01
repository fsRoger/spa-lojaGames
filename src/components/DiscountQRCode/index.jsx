import QRCode from 'qrcode.react';
import { ContainerQr } from './style';

export default function DiscountQRCode() {
  // Código de desconto fixo para R$ 20
  const discountCode = 'DESCONTO20';

  return (
    <ContainerQr>
      <h1>Escaneie o QR code para obter desconto de R$ 20!</h1>

      <QRCode value={discountCode} />

      <p>Mostre este QR code no caixa para aplicar o desconto de R$ 20 nas suas compras.</p>
    </ContainerQr>
  );
}


