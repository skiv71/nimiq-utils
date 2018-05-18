export default class AddressBook {
    static getLabel(address) {
        return AddressBook.BOOK[address] || null;
    }
}

AddressBook.BOOK = {
    // Mainnet
    'NQ58 U4HN TVVA FCRS VLYL 8XTL K0B7 2FVD EC6B': 'Skypool US',
    'NQ88 D1R3 KR4H KSY2 CQYR 5G0C 80X4 0KED 32G8': 'Skypool EU',
    'NQ48 8CKH BA24 2VR3 N249 N8MN J5XX 74DB 5XJ8': 'Skypool',
    'NQ43 GQ0B R7AJ 7SUG Q2HC 3XMP MNRU 8VM0 AJEG': 'Skypool HK',
    'NQ32 473Y R5T3 979R 325K S8UT 7E3A NRNS VBX2': 'SushiPool',
    'NQ76 R7R0 DCKG N0RC 35XK ULTS N41J VGA7 3CMP': 'Porky Pool',
    'NQ10 76JC KSSE 5S2R U401 NC5P M3N2 8TKQ YATP': 'Nimiqchain.info Pool',
    'NQ33 DH76 PHUK J41Q LX3A U4E0 M0BM QJH9 QQL1': 'Beeppool',
    'NQ90 P00L 2EG5 3SBU 7TB5 NPGG 8FNL 4JC7 A4ML': 'NIMIQ.WATCH Pool',
    'NQ11 P00L 2HYP TUK8 VY6L 2N22 MMBU MHHR BSAA': 'Nimpool.io',
    'NQ04 3GHQ RAV6 75FD R9XA VS7N 146Q H230 2KER': 'Nimiqpool.com',
    'NQ07 SURF KVMX XF1U T3PH GXSN HYK1 RG71 HBKR': 'Nimiq.Surf',
    'NQ90 PH1L 7MT2 VTUH PJYC 17RV Q61B 006N 4KP7': 'PhilPool',
    'NQ06 NG1G 83YG 5D59 LK8G Y2JB VYTH EL6D 7AKY': 'Nimbus Pool',

    // Testnet
    'NQ31 QEPR ED7V 00KC P7UC P1PR DKJC VNU7 E461': 'pool.nimiq-testnet.com',
    'NQ36 P00L 1N6T S3QL KJY8 6FH4 5XN4 DXY0 L7C8': 'NIMIQ.WATCH Test-Pool',
    'NQ50 CXGC 14C6 Y7Q4 U3X2 KF0S 0Q88 G09C PGA0': 'SushiPool TESTNET',
}
