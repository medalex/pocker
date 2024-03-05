const ContractAbi = require('../config/contract-abi.json');
const { getContractInstance } = require('../utils/network')

const contractInstance = getContractInstance(serviceAbi);

    exports.getBusinessContractInfo = async (req, res) => {
        try {
            const foundBusinessContract = await contractInstance.getBusinessContractInfo(contractId);
            const prepareResult = {
                price: foundBusinessContract[1].toString(),
                quantity: foundBusinessContract[2].toString(),
                delivery_date: foundBusinessContract[3].toString(),
                product_name: foundBusinessContract[4].toString(),
              };
            return res.status(200).json({ data:  prepareResult});
    
        } catch (err) {
          console.error(err.message);
          return res.status(500).send('Internal server error');
        }
    }