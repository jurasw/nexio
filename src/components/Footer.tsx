import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const Logo = () => {
  return (
    <svg
      width="222"
      height="51"
      viewBox="0 0 222 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_193_6046)">
        <mask
          id="mask0_193_6046"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="222"
          height="51"
        >
          <path d="M221.805 0H0V50.8975H221.805V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_193_6046)">
          <path
            d="M35.0168 2.7167L2.42736 5.31688C2.11708 5.34162 2.10535 5.78878 2.41391 5.82956L37.0206 10.4024C38.9562 10.6582 40.402 12.2977 40.402 14.2368V19.6473C40.402 20.2811 40.9722 20.765 41.6027 20.6662L55.5406 18.4805C58.2278 18.0591 58.9942 14.5798 56.7298 13.0826L44.8988 5.26037C41.9859 3.3344 38.5051 2.4384 35.0168 2.7167Z"
            fill="url(#paint0_linear_193_6046)"
          />
          <path
            d="M31.9745 30.4854L64.8121 27.8821C65.1227 27.8577 65.1343 27.4101 64.8257 27.3694L29.9781 22.7942C28.0411 22.5399 26.5935 20.8997 26.5935 18.9594V13.5518C26.5935 12.9179 26.0233 12.434 25.393 12.5329L11.455 14.7186C8.76779 15.14 8.00129 18.6192 10.2658 20.1165L22.1003 27.9411C25.011 29.8657 28.4888 30.7617 31.9745 30.4854Z"
            fill="url(#paint1_linear_193_6046)"
          />
          <path
            d="M83.186 30.3368C82.8044 30.3368 82.4951 30.0296 82.4951 29.6507V3.10706C82.4951 2.77473 82.7349 2.49019 83.0642 2.43169L89.408 1.30491C89.8315 1.22968 90.2204 1.55303 90.2204 1.98029V2.03C90.2204 2.6237 90.9438 2.95298 91.4373 2.61791C93.4183 1.27303 95.7569 0.600586 98.4533 0.600586C100.747 0.600586 102.758 1.10459 104.487 2.1126C106.254 3.08327 107.626 4.44593 108.604 6.20061C109.581 7.91796 110.07 9.93394 110.07 12.2486V29.6507C110.07 30.0296 109.76 30.3368 109.379 30.3368H103.035C102.654 30.3368 102.344 30.0296 102.344 29.6507V13.3686C102.344 11.4646 101.799 9.97129 100.709 8.88861C99.6188 7.76862 98.1339 7.2086 96.2541 7.2086C94.9384 7.2086 93.7729 7.46994 92.758 7.99261C91.8083 8.44667 91.0069 9.09679 90.3533 9.94298C90.2651 10.0572 90.2204 10.198 90.2204 10.3419V29.6507C90.2204 30.0296 89.9112 30.3368 89.5296 30.3368H83.186Z"
            fill="white"
          />
          <path
            d="M130.301 30.8968C127.369 30.8968 124.7 30.2248 122.294 28.8808C119.925 27.5369 118.046 25.7261 116.655 23.4489C115.264 21.1715 114.568 18.6141 114.568 15.7768C114.568 12.9394 115.226 10.3821 116.542 8.10477C117.895 5.82741 119.719 4.01675 122.012 2.67275C124.305 1.32874 126.861 0.656738 129.681 0.656738C132.5 0.656738 135 1.34741 137.181 2.72876C139.361 4.1101 141.072 5.97675 142.312 8.32876C143.59 10.6808 144.229 13.3501 144.229 16.3368V17.6667C144.229 18.0456 143.92 18.3528 143.538 18.3528H123.383C122.923 18.3528 122.591 18.7921 122.762 19.2164C123.093 20.036 123.538 20.7935 124.098 21.4888C124.888 22.4222 125.846 23.1503 126.974 23.6728C128.139 24.1954 129.38 24.4568 130.696 24.4568C132.011 24.4568 133.215 24.2514 134.305 23.8409C135.211 23.5107 136.008 23.0723 136.696 22.5252C136.979 22.3001 137.388 22.2928 137.656 22.5353L141.662 26.1599C141.975 26.4426 141.961 26.9357 141.624 27.1889C140.018 28.395 138.367 29.2949 136.673 29.8889C134.793 30.5608 132.669 30.8968 130.301 30.8968ZM122.603 12.0229C122.454 12.4442 122.786 12.8648 123.235 12.8648H135.753C136.195 12.8648 136.526 12.4553 136.382 12.0391C136.1 11.2214 135.689 10.4886 135.151 9.84076C134.474 8.94476 133.647 8.25409 132.669 7.76877C131.73 7.2461 130.677 6.98476 129.512 6.98476C128.309 6.98476 127.218 7.22744 126.241 7.71276C125.301 8.1981 124.493 8.88875 123.816 9.78478C123.304 10.4346 122.9 11.1806 122.603 12.0229Z"
            fill="white"
          />
          <path
            d="M144.989 30.3368C144.418 30.3368 144.094 29.6894 144.437 29.2375L154.564 15.9119C154.751 15.6664 154.75 15.3276 154.562 15.0829L144.729 2.26248C144.382 1.81085 144.707 1.16064 145.278 1.16064H152.502C152.721 1.16064 152.926 1.2635 153.057 1.43793L158.777 9.09476C159.054 9.46544 159.613 9.4643 159.888 9.09245L165.556 1.44024C165.686 1.26445 165.893 1.16064 166.112 1.16064H173.059C173.629 1.16064 173.954 1.8085 173.61 2.26047L163.937 14.9688C163.749 15.2146 163.75 15.5542 163.939 15.799L174.275 29.234C174.623 29.6857 174.298 30.3368 173.726 30.3368H166.449C166.23 30.3368 166.024 30.2339 165.894 30.0592L159.72 21.7847C159.444 21.4145 158.886 21.4145 158.61 21.7847L152.436 30.0592C152.306 30.2339 152.1 30.3368 151.881 30.3368H144.989Z"
            fill="white"
          />
          <path
            d="M178.729 30.3369C178.348 30.3369 178.038 30.0297 178.038 29.6508V12.0502C178.038 11.7253 178.268 11.445 178.588 11.3786L184.932 10.064C185.361 9.97511 185.764 10.3004 185.764 10.7357V29.6508C185.764 30.0297 185.454 30.3369 185.073 30.3369H178.729Z"
            fill="white"
          />
          <path
            d="M206.128 30.8966C203.196 30.8966 200.546 30.2247 198.177 28.8806C195.809 27.5368 193.93 25.7259 192.539 23.4488C191.148 21.1714 190.452 18.614 190.452 15.7766C190.452 12.9393 191.129 10.382 192.482 8.10462C193.873 5.78993 195.753 3.96061 198.121 2.61659C200.527 1.27259 203.196 0.600586 206.128 0.600586C209.061 0.600586 211.711 1.27259 214.079 2.61659C216.486 3.96061 218.365 5.78993 219.718 8.10462C221.109 10.382 221.805 12.9393 221.805 15.7766C221.805 18.614 221.109 21.1714 219.718 23.4488C218.365 25.7259 216.504 27.5368 214.136 28.8806C211.768 30.2247 209.098 30.8966 206.128 30.8966ZM206.128 24.2328C207.67 24.2328 209.042 23.8593 210.245 23.1126C211.486 22.366 212.463 21.358 213.177 20.0887C213.929 18.782 214.305 17.3447 214.305 15.7766C214.305 14.1713 213.929 12.734 213.177 11.4646C212.463 10.1953 211.486 9.18729 210.245 8.44061C209.042 7.6566 207.67 7.26461 206.128 7.26461C204.625 7.26461 203.253 7.6566 202.012 8.44061C200.771 9.18729 199.794 10.1953 199.08 11.4646C198.366 12.734 198.008 14.1713 198.008 15.7766C198.008 17.3447 198.366 18.782 199.08 20.0887C199.794 21.358 200.771 22.366 202.012 23.1126C203.253 23.8593 204.625 24.2328 206.128 24.2328Z"
            fill="white"
          />
          <path
            d="M178.802 8.83679C178.753 8.84724 178.704 8.8538 178.655 8.84859C178.308 8.81182 178.038 8.52043 178.038 8.1664V2.00092C178.038 1.67601 178.268 1.39565 178.588 1.32928L184.932 0.0147168C185.361 -0.0741988 185.764 0.251057 185.764 0.686348V6.79421C185.764 7.14823 185.494 7.43962 185.147 7.47639C185.098 7.48161 185.048 7.48559 185 7.49604L178.802 8.83679Z"
            fill="white"
          />
          <path
            d="M83.0591 47.5694V39.467H85.2045V40.0891C85.7892 39.5706 86.4989 39.3115 87.3342 39.3115C87.8666 39.3115 88.3417 39.4204 88.7592 39.6381C89.1768 39.8455 89.5213 40.141 89.7928 40.5245C90.1269 40.1305 90.5184 39.83 90.9673 39.6226C91.4267 39.4151 91.9329 39.3115 92.4863 39.3115C93.1023 39.3115 93.6398 39.4515 94.0992 39.7314C94.569 40.0011 94.9345 40.3793 95.1954 40.8667C95.4669 41.3435 95.6025 41.9034 95.6025 42.5462V47.5694H93.4728V42.8573C93.4728 42.3285 93.3319 41.9139 93.05 41.6132C92.7681 41.3021 92.3923 41.1466 91.9225 41.1466C91.5989 41.1466 91.3014 41.2141 91.0299 41.3488C90.769 41.4835 90.5444 41.6857 90.3565 41.9553C90.3669 42.0486 90.3775 42.1419 90.3878 42.2352C90.3982 42.3285 90.4035 42.4321 90.4035 42.5462V47.5694H88.2581V42.8573C88.2581 42.3285 88.1172 41.9139 87.8353 41.6132C87.5638 41.3021 87.1933 41.1466 86.7235 41.1466C86.3999 41.1466 86.1074 41.2088 85.8465 41.3332C85.596 41.4576 85.382 41.6443 85.2045 41.8931V47.5694H83.0591Z"
            fill="#F19E38"
          />
          <path
            d="M100.477 47.7094C99.8921 47.7094 99.3753 47.6058 98.9265 47.3983C98.4777 47.1806 98.1279 46.8851 97.8773 46.5119C97.6267 46.1387 97.5015 45.7085 97.5015 45.2211C97.5015 44.4435 97.7937 43.8423 98.3784 43.4171C98.9735 42.9817 99.7878 42.764 100.821 42.764C101.531 42.764 102.199 42.8728 102.826 43.0906V42.4996C102.826 42.033 102.68 41.6806 102.387 41.4421C102.095 41.2036 101.667 41.0844 101.103 41.0844C100.759 41.0844 100.388 41.1413 99.9914 41.2555C99.5946 41.3591 99.1354 41.5251 98.6133 41.7531L97.8303 40.1824C98.4777 39.8922 99.0935 39.6745 99.6782 39.5292C100.273 39.384 100.868 39.3115 101.463 39.3115C102.56 39.3115 103.41 39.5759 104.016 40.1047C104.632 40.6231 104.94 41.3591 104.94 42.313V47.5694H102.826V46.994C102.492 47.2428 102.131 47.4242 101.745 47.5383C101.359 47.6524 100.936 47.7094 100.477 47.7094ZM99.5372 45.1745C99.5372 45.4855 99.6729 45.7343 99.9444 45.9209C100.216 46.0973 100.576 46.1853 101.025 46.1853C101.38 46.1853 101.709 46.1439 102.011 46.0609C102.314 45.9676 102.586 45.8329 102.826 45.6566V44.4746C102.565 44.371 102.293 44.2933 102.011 44.2414C101.73 44.1895 101.427 44.1636 101.103 44.1636C100.612 44.1636 100.226 44.2569 99.9444 44.4435C99.6729 44.6199 99.5372 44.8634 99.5372 45.1745Z"
            fill="#F19E38"
          />
          <path
            d="M107.19 47.5694V39.467H109.335V40.1358C109.951 39.5862 110.713 39.3115 111.622 39.3115C112.258 39.3115 112.817 39.4515 113.297 39.7314C113.788 40.0011 114.169 40.3793 114.44 40.8667C114.712 41.3435 114.848 41.9034 114.848 42.5462V47.5694H112.702V42.8573C112.702 42.3285 112.551 41.9139 112.248 41.6132C111.945 41.3021 111.533 41.1466 111.011 41.1466C110.645 41.1466 110.322 41.2191 110.04 41.3643C109.758 41.499 109.523 41.6962 109.335 41.9553V47.5694H107.19Z"
            fill="#F19E38"
          />
          <path
            d="M119.698 47.7094C119.114 47.7094 118.597 47.6058 118.148 47.3983C117.699 47.1806 117.35 46.8851 117.099 46.5119C116.848 46.1387 116.723 45.7085 116.723 45.2211C116.723 44.4435 117.016 43.8423 117.6 43.4171C118.195 42.9817 119.009 42.764 120.043 42.764C120.753 42.764 121.421 42.8728 122.047 43.0906V42.4996C122.047 42.033 121.901 41.6806 121.609 41.4421C121.317 41.2036 120.889 41.0844 120.325 41.0844C119.98 41.0844 119.61 41.1413 119.213 41.2555C118.816 41.3591 118.357 41.5251 117.835 41.7531L117.052 40.1824C117.699 39.8922 118.315 39.6745 118.9 39.5292C119.495 39.384 120.09 39.3115 120.685 39.3115C121.781 39.3115 122.632 39.5759 123.238 40.1047C123.854 40.6231 124.162 41.3591 124.162 42.313V47.5694H122.047V46.994C121.714 47.2428 121.353 47.4242 120.967 47.5383C120.581 47.6524 120.158 47.7094 119.698 47.7094ZM118.759 45.1745C118.759 45.4855 118.895 45.7343 119.166 45.9209C119.438 46.0973 119.798 46.1853 120.247 46.1853C120.602 46.1853 120.931 46.1439 121.233 46.0609C121.536 45.9676 121.807 45.8329 122.047 45.6566V44.4746C121.787 44.371 121.515 44.2933 121.233 44.2414C120.951 44.1895 120.649 44.1636 120.325 44.1636C119.834 44.1636 119.448 44.2569 119.166 44.4435C118.895 44.6199 118.759 44.8634 118.759 45.1745Z"
            fill="#F19E38"
          />
          <path
            d="M130.514 50.8976C129.888 50.8976 129.283 50.8301 128.698 50.6954C128.113 50.571 127.586 50.3896 127.116 50.1511L127.868 48.5026C128.317 48.7204 128.755 48.8811 129.183 48.9847C129.611 49.0883 130.039 49.1403 130.467 49.1403C131.104 49.1403 131.584 49.0056 131.908 48.7359C132.242 48.4663 132.409 48.0619 132.409 47.5229V46.8853C131.741 47.3726 130.994 47.6162 130.17 47.6162C129.397 47.6162 128.698 47.4349 128.071 47.0719C127.455 46.6987 126.96 46.1958 126.584 45.5634C126.218 44.931 126.036 44.2312 126.036 43.4639C126.036 42.6967 126.218 42.0021 126.584 41.38C126.96 40.758 127.466 40.2656 128.103 39.9026C128.739 39.5294 129.449 39.3428 130.232 39.3428C130.629 39.3428 131.015 39.3997 131.391 39.5138C131.767 39.628 132.117 39.7885 132.44 39.9959V39.4672H134.555V47.554C134.555 48.6218 134.205 49.446 133.505 50.0267C132.816 50.6074 131.819 50.8976 130.514 50.8976ZM130.499 45.8122C130.895 45.8122 131.256 45.75 131.579 45.6256C131.903 45.4909 132.18 45.3043 132.409 45.0658V41.8932C132.18 41.6652 131.898 41.4889 131.564 41.3645C131.24 41.2298 130.89 41.1623 130.514 41.1623C130.065 41.1623 129.663 41.2659 129.309 41.4733C128.954 41.6702 128.672 41.9451 128.463 42.2976C128.254 42.6397 128.15 43.0285 128.15 43.4639C128.15 43.9097 128.249 44.309 128.447 44.6614C128.656 45.0138 128.938 45.2938 129.293 45.5012C129.658 45.7086 130.06 45.8122 130.499 45.8122Z"
            fill="#F19E38"
          />
          <path
            d="M140.864 47.725C140.05 47.725 139.309 47.5384 138.64 47.1651C137.983 46.7919 137.461 46.289 137.075 45.6566C136.688 45.0243 136.495 44.3139 136.495 43.5261C136.495 42.7382 136.678 42.0279 137.043 41.3955C137.419 40.7632 137.925 40.2602 138.562 39.887C139.199 39.5138 139.909 39.3271 140.692 39.3271C141.475 39.3271 142.169 39.519 142.775 39.9026C143.38 40.2861 143.855 40.8045 144.2 41.4577C144.555 42.1109 144.732 42.8521 144.732 43.6816V44.2414H138.687C138.781 44.5628 138.933 44.8532 139.142 45.1123C139.361 45.3714 139.627 45.5736 139.94 45.7188C140.264 45.8641 140.609 45.9366 140.974 45.9366C141.339 45.9366 141.673 45.8796 141.976 45.7655C142.289 45.6514 142.555 45.4908 142.775 45.2834L144.184 46.5586C143.683 46.963 143.166 47.2584 142.634 47.4451C142.112 47.6317 141.522 47.725 140.864 47.725ZM138.656 42.7174H142.618C142.545 42.3961 142.409 42.1161 142.211 41.8776C142.023 41.6288 141.793 41.4369 141.522 41.3022C141.261 41.157 140.969 41.0845 140.645 41.0845C140.311 41.0845 140.008 41.1519 139.737 41.2866C139.476 41.4213 139.251 41.6132 139.063 41.8621C138.875 42.1006 138.74 42.3855 138.656 42.7174Z"
            fill="#F19E38"
          />
          <path
            d="M146.673 47.5694V39.467H148.819V40.0891C149.403 39.5706 150.113 39.3115 150.948 39.3115C151.481 39.3115 151.956 39.4204 152.373 39.6381C152.791 39.8455 153.136 40.141 153.407 40.5245C153.741 40.1305 154.133 39.83 154.582 39.6226C155.041 39.4151 155.547 39.3115 156.101 39.3115C156.717 39.3115 157.254 39.4515 157.713 39.7314C158.183 40.0011 158.549 40.3793 158.81 40.8667C159.081 41.3435 159.217 41.9034 159.217 42.5462V47.5694H157.087V42.8573C157.087 42.3285 156.946 41.9139 156.664 41.6132C156.382 41.3021 156.007 41.1466 155.537 41.1466C155.213 41.1466 154.916 41.2141 154.644 41.3488C154.383 41.4835 154.159 41.6857 153.971 41.9553C153.981 42.0486 153.992 42.1419 154.002 42.2352C154.012 42.3285 154.018 42.4321 154.018 42.5462V47.5694H151.872V42.8573C151.872 42.3285 151.731 41.9139 151.45 41.6132C151.178 41.3021 150.808 41.1466 150.338 41.1466C150.014 41.1466 149.722 41.2088 149.461 41.3332C149.21 41.4576 148.996 41.6443 148.819 41.8931V47.5694H146.673Z"
            fill="#F19E38"
          />
          <path
            d="M165.484 47.725C164.67 47.725 163.929 47.5384 163.261 47.1651C162.603 46.7919 162.081 46.289 161.695 45.6566C161.308 45.0243 161.115 44.3139 161.115 43.5261C161.115 42.7382 161.298 42.0279 161.663 41.3955C162.039 40.7632 162.546 40.2602 163.182 39.887C163.819 39.5138 164.529 39.3271 165.312 39.3271C166.095 39.3271 166.789 39.519 167.395 39.9026C168 40.2861 168.475 40.8045 168.82 41.4577C169.175 42.1109 169.352 42.8521 169.352 43.6816V44.2414H163.308C163.402 44.5628 163.553 44.8532 163.762 45.1123C163.981 45.3714 164.247 45.5736 164.56 45.7188C164.884 45.8641 165.228 45.9366 165.594 45.9366C165.959 45.9366 166.293 45.8796 166.596 45.7655C166.909 45.6514 167.176 45.4908 167.395 45.2834L168.804 46.5586C168.303 46.963 167.786 47.2584 167.254 47.4451C166.732 47.6317 166.142 47.725 165.484 47.725ZM163.276 42.7174H167.238C167.165 42.3961 167.029 42.1161 166.831 41.8776C166.643 41.6288 166.414 41.4369 166.142 41.3022C165.881 41.157 165.589 41.0845 165.265 41.0845C164.931 41.0845 164.628 41.1519 164.357 41.2866C164.096 41.4213 163.871 41.6132 163.683 41.8621C163.496 42.1006 163.36 42.3855 163.276 42.7174Z"
            fill="#F19E38"
          />
          <path
            d="M171.293 47.5694V39.467H173.439V40.1358C174.055 39.5862 174.817 39.3115 175.725 39.3115C176.362 39.3115 176.921 39.4515 177.401 39.7314C177.892 40.0011 178.272 40.3793 178.544 40.8667C178.815 41.3435 178.951 41.9034 178.951 42.5462V47.5694H176.806V42.8573C176.806 42.3285 176.654 41.9139 176.352 41.6132C176.049 41.3021 175.636 41.1466 175.114 41.1466C174.749 41.1466 174.425 41.2191 174.144 41.3643C173.862 41.499 173.627 41.6962 173.439 41.9553V47.5694H171.293Z"
            fill="#F19E38"
          />
          <path
            d="M184.841 47.6937C183.933 47.6937 183.244 47.4916 182.774 47.0872C182.315 46.6726 182.085 46.0711 182.085 45.2832V41.2398H180.409V39.467H182.085V37.3986L184.23 36.9165V39.467H186.563V41.2398H184.23V44.8478C184.23 45.221 184.314 45.4907 184.481 45.6565C184.648 45.812 184.94 45.8898 185.358 45.8898C185.567 45.8898 185.754 45.8795 185.921 45.8587C186.099 45.8276 186.292 45.7756 186.501 45.7031V47.4605C186.282 47.533 186.01 47.5901 185.687 47.6315C185.363 47.6729 185.081 47.6937 184.841 47.6937Z"
            fill="#F19E38"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_193_6046"
          x1="20.1936"
          y1="9.90311"
          x2="47.657"
          y2="17.1577"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F19E38" />
          <stop offset="1" stop-color="#FFD097" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_193_6046"
          x1="46.9786"
          y1="23.296"
          x2="19.417"
          y2="15.9855"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F19E38" />
          <stop offset="1" stop-color="#FFD097" />
        </linearGradient>
        <clipPath id="clip0_193_6046">
          <rect width="222" height="51" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={"#F19E38"}
      color="#000"
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: "#D07A0F",
        color: "#000",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footer: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"#000"}
        color={"#ffffff"}
        style={{ fontFamily: "Red Hat Display" }}
      >
        <Container as={Stack} maxW={"6xl"} py={10}>
          <SimpleGrid
            templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
            spacing={8}
            py={50}
          >
            <Stack spacing={6}>
              <Box>
                <Logo />
              </Box>
            </Stack>
            <Stack align={"flex-start"} minW={"300px"}>
              <ListHeader>Nexio Management Sp. z o.o.</ListHeader>
              <Text>
                <Image
                  src={"icons/footer/map-pin.svg"}
                  marginRight="14px"
                  float="left"
                />
                ul. Szturmowa 2a, 02-678 Warszawa
              </Text>
              <Text>
                <Image
                  src={"icons/footer/phone.svg"}
                  marginRight="14px"
                  float="left"
                />
                +48 22 244 13 50
              </Text>
              <Text className="footer-mail">
                <Image
                  src={"icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                biuro@nexio.pl
              </Text>
              <Text>NIP: 525-23-65-494</Text>
            </Stack>
            <Stack align={"flex-start"} minW="250px">
              <ListHeader>OBSERWUJ NAS</ListHeader>
              <Text className="footer-mail">
                <Image
                  src={"icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                biuro@nexio.pl
              </Text>
              <Text className="footer-mail">
                <Image
                  src={"icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                sprzedaz@nexio.pl
              </Text>
              <Text className="footer-mail">
                <Image
                  src={"icons/footer/mail.svg"}
                  marginRight="14px"
                  float="left"
                />
                rekrutacja@nexio.pl
              </Text>
            </Stack>
            <Stack align={"flex-start"}>
              <ListHeader>NAWIGACJA</ListHeader>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                href={"#"}
              >
                Dla biznesu
              </Link>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                href={"#"}
              >
                Kariera
              </Link>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                href={"#"}
              >
                Kontakt
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box>
          <Container
            as={Stack}
            maxW={"6xl"}
            p={45}
            direction={{ base: "column", md: "row" }}
            spacing={4}
            justify={{ base: "center", md: "space-between" }}
            align={{ base: "center", md: "center" }}
            borderTopWidth={1}
            borderColor="#282828"
          >
            <Text>Copyright© 2023 Nexio Management. All rights reserved.</Text>
            <Stack direction={"row"} spacing={6}>
              <Link
                _hover={{
                  color: "#fff",
                  textDecoration: "underline",
                }}
                onClick={onOpen}
              >
                polityka prywatności
              </Link>
              <SocialButton
                label={"Linked in"}
                href={
                  "https://www.linkedin.com/company/nexio-management-ltd-/mycompany/"
                }
              >
                <FaLinkedinIn />
              </SocialButton>
              <SocialButton
                label={"Facebook"}
                href={"https://www.facebook.com/NexioManagement"}
              >
                <FaFacebookF />
              </SocialButton>
              <SocialButton
                label={"Instagram"}
                href={"https://www.instagram.com/nexiomanagement/"}
              >
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Modal id="polityka" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1200px" borderRadius="32px" paddingBottom={"120px"}>
          <ModalHeader fontSize="38px" paddingTop="50px">
            Polityka prywatności
          </ModalHeader>
          <ModalCloseButton margin="50px" />
          <ModalBody>
            <div>
              <p>&nbsp;</p>
              <ol>
                <li>
                  <span style={{ fontWeight: 400 }}>WPROWADZENIE</span>
                </li>
              </ol>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Niniejszy dokument stanowi opis polityki prywatności Nexio
                  Management Sp. z o.o. z siedzibą w Warszawie i stanowi zapis
                  zasad, sposobów przetwarzania danych i informacji pochodzących
                  od kandydatów, klientów oraz użytkowników niniejszej strony
                  internetowej.
                </span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Przed korzystaniem z witryny internetowej prośba o dokładne
                  zapoznanie się z treścią Polityką Prywatności.&nbsp;
                </span>
                <span style={{ fontWeight: 400 }}>
                  <br />
                  <br />
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>2. DEFINICJE</span>
              </p>
              <ol>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Administrator danych- Nexio Management Sp. z o.o., ul.
                    Szturmowa 2A, 02-678 Warszawa
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Dane osobowe – wszelkie informacje o zidentyfikowanej lub
                    możliwej do zidentyfikowania osobie fizycznej („osobie,
                    której dane dotyczą”), gdzie poprzez możliwą do
                    zidentyfikowania osobę fizyczną rozumie się osobę, którą
                    można bezpośrednio lub pośrednio zidentyfikować, w
                    szczególności na podstawie identyfikatora takiego jak imię i
                    nazwisko, numer identyfikacyjny, dane o lokalizacji,
                    identyfikator internetowy lub jeden bądź kilka szczególnych
                    czynników określających fizyczną, fizjologiczną, genetyczną,
                    psychiczną, ekonomiczną, kulturową lub społeczną tożsamość
                    osoby fizycznej
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    RODO- Rozporządzenie Parlamentu Europejskiego i Rady (UE)
                    2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
                    fizycznych w związku z przetwarzaniem danych osobowych i w
                    sprawie swobodnego przepływu takich danych oraz uchylenia
                    dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Polityka- niniejsza Polityka prywatności&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Użytkownik- kandydat do pracy, osoba zadająca pytanie, osoba
                    polecająca znajomego do pracy i osoba odwiedzającą strony
                    należące do Nexio, subskrybent newslettera.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Usługi – należy rozumieć usługi realizowane przez Nexio
                    drogą elektroniczną za pomocą strony internetowej, tj.
                    wysyłanie zapytania poprzez formularz kontaktowy oraz
                    przesyłanie dokumentów niezbędnych w procesie rekrutacji, a
                    także usługa newslettera (
                  </span>
                  <span style={{ fontWeight: 400 }}>
                    informacji handlowych i&nbsp;marketingowych dotyczących
                    produktów i&nbsp;usług).
                  </span>
                </li>
              </ol>
              <p>&nbsp;</p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  INSPEKTOR OCHRONY DANYCH
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  We wszelkich sprawach związanych z zasadami przetwarzania
                  Danych osobowych określonych w niniejszej Polityce Użytkownik
                  może kontaktować się z Inspektorem Ochrony Danych pod
                  mailem:&nbsp;
                </span>
                <a href="mailto:iod@nexio.pl">
                  <span style={{ fontWeight: 400 }}>iod@nexio.pl</span>
                </a>
                <span style={{ fontWeight: 400 }}>.</span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  3. CELE PRZETWARZANIA DANYCH OSOBOWYCH, PODSTAWA PRAWNA
                  PRZETWARZANIA I OKRES PRZECHOWYWANIA
                </span>
              </p>
              <ul>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Przeprowadzanie rekrutacji na potrzeby Administratora –
                    realizacja procesów rekrutacyjnych zgodnie z Art. 6 ust. 1
                    lit. b RODO oraz realizacja kolejnych procesów
                    rekrutacyjnych- jeżeli została wyrażona zgoda na dalsze
                    rekrutacje, Art. 6 ust. 1 lit. a RODO – zgoda na
                    przetwarzanie danych osobowych,&nbsp;Art. 22
                  </span>
                  <span style={{ fontWeight: 400 }}>1</span>
                  <span style={{ fontWeight: 400 }}>
                    &nbsp;§ 1 Kodeksu Pracy
                  </span>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Prowadzenie bieżących rekrutacji- do momentu zakończenia
                        procesu rekrutacyjnego na stanowisko wskazane w
                        ogłoszeniu
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Prowadzenie przyszłych rekrutacji- do momentu wycofania
                        przez kandydata zgody na przetwarzanie danych osobowych
                        dla potrzeb przyszłych rekrutacji, jednakże nie dłużej
                        niż 3 lata od dnia jej wyrażenia
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Do czasu wycofania zgody na przetwarzanie danych
                        osobowych
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Odpowiadanie Użytkownikom na przesyłane przez nich
                    wiadomości oraz zapytania na skrzynki pocztowe – Art. 6 ust
                    1 lit. a oraz lit f RODO – uzasadniony interes
                    Administratora danych osobowych polegający na budowaniu
                    wizerunku
                  </span>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Do czasu wycofania zgody na przetwarzanie danych
                        osobowych
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Przetwarzanie w celu dostarczenia zamówionego Newslettera –{" "}
                  </span>
                  <span style={{ fontWeight: 400 }}>
                    Art. 6 ust 1 lit. a RODO
                  </span>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Do czasu wycofania zgody na przetwarzanie danych
                        osobowych
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Zapewnienie bezpieczeństwa naszej strony internetowej i
                    zapobieganie oszustwom – Art. 6 ust 1 lit. f RODO;
                  </span>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Do czasu ostania celu przetwarzania Danych osobowych
                      </span>
                    </li>
                  </ul>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Zawieranie i obsługa umów cywilnoprawnych oraz umów o pracę
                    – przetwarzanie danych jest niezbędne do realizacji umów
                    Art. 6 ust. 1 lit b RODO; realizacja obowiązków wobec
                    organów/urzędów państwowych/samorządowych Art. 6 ust. 1 lit
                    c RODO
                  </span>
                  <ul>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Dane osobowe będą przetwarzanie przez okres wskazany w
                        przepisach prawa jak i przez okres niezbędny w celu
                        zagwarantowania możliwości rozpatrzenia ewentualnych
                        roszczeń cywilnoprawnych, które mogłyby wyniknąć w
                        związku z przedmiotem wyrażonej zgody
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        W przypadku dodatkowych usług benefitowych- do
                        zakończenia stosunku pracy / zakończenia współpracy lub
                        do momentu rezygnacji, z uwzględnieniem właściwych
                        terminów przedawnienia roszczeń
                      </span>
                    </li>
                    <li>
                      <span style={{ fontWeight: 400 }}>
                        Wykorzystywanie wizerunku pracowników/współpracowników-
                        do momentu wniesienia sprzeciwu lub do momentu wycofania
                        zgody na rozpowszechnienie wizerunku
                      </span>
                    </li>
                  </ul>
                </li>
              </ul>
              <p>
                <span style={{ fontWeight: 400 }}>&nbsp;</span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  4. UDOSTĘPNIANIE DANYCH OSOBOWYCH
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Bywają sytuacje, w których Administrator przekazuje Dane
                  osobowe Użytkownika podmiotom zewnętrznym tj. firmom,
                  przedsiębiorcą, instytucją publicznym. Przekazanie Danych
                  osobowych wynika z przepisów prawa nakazującego przekazanie
                  danych określonej instytucji publicznej np. Policji, sąd itp.
                  oraz w sytuacjach realizacji umów z klientami Administratora,
                  np. rezerwacje noclegów, legalizacja pobytu cudzoziemców itp.,
                  a także koniczności udostępneinia donych{" "}
                </span>
                <span style={{ fontWeight: 400 }}>
                  podmiotom przetwarzającym dane na nasze zlecenie, w
                  szczególności dostawcom usług IT, agencjom marketingowym.
                </span>
              </p>
              <p>&nbsp;</p>
              <p>
                <span style={{ fontWeight: 400 }}>5. PRAWA UŻYTKOWNIKA</span>
              </p>
              <ul>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo dostępu do danych
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do sprostowania danych
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do usunięcia danych („prawo do bycia zapomnianym)
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do ograniczenia przetwarzania
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do przenoszenia danych
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>Prawo do sprzeciwu</span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do niepodlegania decyzjom opartym wyłącznie na
                    zautomatyzowanym przetwarzaniu w tym profilowaniu&nbsp;
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Prawo do wycofania zgody
                  </span>
                </li>
              </ul>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Realizacja każdego z powyższych praw następuje na wniosek
                  Użytkownika. Spółka Nexio rozpatruje przesłany wniosek
                  na&nbsp;
                </span>
                <a href="mailto:adresiod@nexio.pl">
                  <span style={{ fontWeight: 400 }}>adresiod@nexio.pl</span>
                </a>
                <span style={{ fontWeight: 400 }}>
                  &nbsp;i przesyłam odpowiedź w ciągu 30 dni od dnia wpłynięcia
                  wniosku.
                </span>
              </p>
              <ul>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    prawo wniesienia skargi
                  </span>
                  <span style={{ fontWeight: 400 }}>
                    &nbsp;do organu nadzorczego zajmującego się ochroną danych
                    osobowych, którym jest Prezes Urzędu Ochrony Danych
                    Osobowych (PUODO).
                  </span>
                </li>
              </ul>
              <p>&nbsp;</p>
              <p>
                <span style={{ fontWeight: 400 }}>6. COOKIES</span>
              </p>
              <ol>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Serwis zbiera w sposób automatyczny tylko informacje zawarte
                    w plikach cookies.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Pliki (cookies) są plikami tekstowymi, które przechowywane
                    są w urządzeniu końcowym użytkownika serwisu. Przeznaczone
                    są do korzystania ze stron serwisu. Przede wszystkim
                    zawierają nazwę strony internetowej swojego pochodzenia,
                    swój unikalny numer, czas przechowywania na urządzeniu
                    końcowym.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Operator serwisu jest podmiotem zamieszczającym na
                    urządzeniu końcowym swojego użytkownika pliki cookies oraz
                    mającym do nich dostęp.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Operator serwisu wykorzystuje pliki (cookies) w celu:
                  </span>
                </li>
              </ol>
              <ul>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    dopasowania zawartości strony internetowej do indywidualnych
                    preferencji użytkownika, przede wszystkim pliki te
                    rozpoznają jego urządzenie, aby zgodnie z jego preferencjami
                    wyświetlić stronę;
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    przygotowywania statystyk pomagających poznaniu preferencji
                    i zachowań użytkowników, analiza tych statystyk jest
                    anonimowa i umożliwia dostosowanie zawartości i wyglądu
                    serwisu do panujących trendów, statystyki stosuje się też do
                    oceny popularności strony;
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    możliwości logowania do serwisu;
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    utrzymania logowania użytkownika na każdej kolejnej stronie
                    serwisu.&nbsp;
                  </span>
                </li>
              </ul>
              <ol>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Serwis stosuje dwa zasadnicze rodzaje plików (cookies) –
                    sesyjne i stałe. Pliki sesyjne są tymczasowe, przechowuje
                    się je do momentu opuszczenia strony serwisu (poprzez
                    wejście na inną stronę, wylogowanie lub wyłączenie
                    przeglądarki). Pliki stałe przechowywane są w urządzeniu
                    końcowym użytkownika do czasu ich usunięcia przez
                    użytkownika lub przez czas wynikający z ich ustawień.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Użytkownik może w każdej chwili dokonać zmiany ustawień
                    swojej przeglądarki, aby zablokować obsługę plików (cookies)
                    lub każdorazowo uzyskiwać informacje o ich umieszczeniu w
                    swoim urządzeniu. Inne dostępne opcje można sprawdzić w
                    ustawieniach swojej przeglądarki internetowej. Należy
                    pamiętać, że większość przeglądarek domyślnie jest ustawione
                    na akceptację zapisu plików (cookies)w urządzeniu końcowym.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Operator Serwisu informuje, że zmiany ustawień w
                    przeglądarce internetowej użytkownika mogą ograniczyć dostęp
                    do niektórych funkcji strony internetowej serwisu.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Pliki (cookies) z których korzysta serwis (zamieszczane w
                    urządzeniu końcowym użytkownika) mogą być udostępnione jego
                    partnerom oraz współpracującym z nim reklamodawcą.
                  </span>
                </li>
                <li>
                  <span style={{ fontWeight: 400 }}>
                    Informacje dotyczące ustawień przeglądarek internetowych
                    dostępne są w jej menu (pomoc) lub na stronie jej
                    producenta.
                  </span>
                </li>
              </ol>
              <p>
                <span style={{ fontWeight: 400 }}>
                  (źródło: https://www.ciasteczka.org.pl/polityka-prywatnosci)
                </span>
              </p>{" "}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default Footer;
